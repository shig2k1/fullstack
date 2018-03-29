<template lang="pug">
  page-layout(v-if="game")
    div(slot="top") {{ game.name }}

    div(slot="middle")

      // output the game canvas
      div(v-if="game.tilemap")
        div.row(v-for="(row, i) in game.tilemap",
        :key="`row_${i}`")

          tile(v-for="(tile, j) in row",
          :key="`tile_${i}_${j}`",
          :flipped="tile.flipped",
          :x="j", 
          :y="i",
          @flip="tileFlip")

      div(v-if="players.length < 2") Waiting for players
    
      div players
      ul
        li(v-for="player in players",
        :key="JSON.stringify(player)") {{ player }}

      v-text-field(type="text", 
            v-model="message",
            label="Name",
            hint="Message")
            
      v-btn(@click="sendMessage") Send Message

      ul
        li(v-for="_message in messages") {{ _message }}

    div(slot="bottom")
      v-btn(v-if="game.owner === $store.state.player.id",
      block,
      :disabled="players.length < 2") Start
      
</template>

<script>
import pageLayout from "./page-layout.vue"
import tile from './tile.vue'

import { mapGetters } from 'vuex'

// state action
import { ACTIONS, MUTATIONS } from "../store/modules/game.store"

// socket.io actions
import { LOBBY_EVENTS, GAME_EVENTS } from '../../enums/socketio-events'

export default {
  components: {
    pageLayout,
    tile
  },

  data: () => ({
    message: "",
    messages: []
  }),

  computed: {
    ...mapGetters([
      'game'
    ]),
    players() {
      return [...(this.game.players || [])];
    }
  },

  sockets: {
    playerJoined() {
      console.log("player joined!");
    },
    updateMessages(data) {
      let { message } = data;
      this.messages.push(message);
    }
  },

  watch: {
    game(nv) {
      this.addWatcher();
    }
  },

  methods: {
    addWatcher() {
      if (this.$options.sockets[`game-${this.game.id}`])
        delete this.$options.sockets[`game-${this.game.id}`];
      
      // respond to socket.io game events
      this.$options.sockets[`game-${this.game.id}`] = data => {

        switch(data.event){
          // new message from a client
          case LOBBY_EVENTS.SERVER_NEW_MESSAGE:
            this.messages.push(data.payload.message)
            break;

          // tile map updated
          case GAME_EVENTS.TILEMAP_UPDATED: 
            console.log('data', data.payload)
            console.log('huh?')
            
            
            
            this.$store.dispatch(ACTIONS.UPDATE_MAP, { 
              gameId: this.game.id,
              tilemap: [ ...data.payload ]
            })
            break;
        }
      };
    },

    tileFlip({ x, y, isFlipped }){
      this.$socket.emit(GAME_EVENTS.FLIP_CARD, {
        gameId: this.game.id,
        data: {
          x,
          y,
          isFlipped
        }
      })
    },

    sendMessage() {
      this.$socket.emit(LOBBY_EVENTS.CLIENT_SENT_MESSAGE, {
        gameId: this.game.id,
        message: this.message
      })
      this.message = ''
    }
  },

  beforeMount() {
    // reload game data with new player
    this.$store.dispatch(ACTIONS.LOAD_GAMES);

    // add a watcher for io events on this game
    this.addWatcher();
  },

  beforeDestroy() {
    // clean up socket watcher
    if (this.game) delete this.$options.sockets[`game-${this.game.id}`];
  }
};
</script>

