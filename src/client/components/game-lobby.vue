<template lang="pug">
  page-layout(v-if="game")
    div(slot="top") {{ game.name }}

    div(slot="middle")
      div(v-if="players.length < 2") Waiting for players
    
      div players
      ul
        li(v-for="player in players") {{ player }}

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

// state action
import { ACTIONS } from "../store/modules/game.store"

// socket.io actions
import { LOBBY_EVENTS } from '../../enums/socketio-events'

export default {
  components: {
    pageLayout
  },

  data: () => ({
    message: "",
    messages: []
  }),

  computed: {
    game() {
      return this.$store.state.availableGames[this.$store.state.game] || {};
    },
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
        }
      };
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

