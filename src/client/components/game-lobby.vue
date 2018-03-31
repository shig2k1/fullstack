<template lang="pug">
  page-layout(v-if="game")
    div(slot="top") {{ game.name }}

    div(slot="middle")

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
        li(v-for="_message in messages") 
          div.message {{ _message.message }}
          div.sender {{ _message.from }} @ {{ formatDate(_message.ts) }}

    div(slot="bottom")
      v-btn(v-if="game.owner === $store.state.player.id",
      block,
      :disabled="players.length < 2") Start
      
</template>

<script>
import { mapGetters } from 'vuex'

// time/date formatting
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.locale(en)
const timeAgo = new TimeAgo('en-US')

// state action
import { ACTIONS, MUTATIONS } from "../store/modules/game.store"

// socket.io actions
import { LOBBY_EVENTS, GAME_EVENTS } from '../../enums/socketio-events'

// components
import pageLayout from "./page-layout.vue"
import pairsGame from './pairs-game.vue'

export default {
  components: {
    pageLayout,
    pairsGame
  },

  data: () => ({
    message: ""
  }),

  computed: {
    ...mapGetters([
      'game',
      'messages',
      'player'
    ]),
    players() {
      return [...(this.game.players || [])];
    }
  },

  methods: {
    addWatcher() {
      console.log('adding watcher')

      if (this.$options.sockets[`game-${this.game.id}`])
        delete this.$options.sockets[`game-${this.game.id}`];
      
      // respond to socket.io game events
      this.$options.sockets[`game-${this.game.id}`] = data => {
        console.log('game event', data.event)
        switch(data.event){
          case LOBBY_EVENTS.SERVER_NEW_MESSAGE:
          console.log('data', data.payload)
          const message = data.payload
          this.$store.commit( MUTATIONS.ADD_MESSAGE, message )
          break;
        }
      }
    },

    sendMessage() {
      console.log('send', this.game.id, this.message, LOBBY_EVENTS.CLIENT_SENT_MESSAGE)
      this.$socket.emit(LOBBY_EVENTS.CLIENT_SENT_MESSAGE, {
        gameId: this.game.id,
        playerId: this.player.id,
        message: this.message
      })
      this.$nextTick(() => {
        this.message = ''
      })
    },

    formatDate(ts){
      return timeAgo.format(ts)
    }
  },

  beforeMount() {
    // reload game data with new player
    this.$store.dispatch(ACTIONS.LOAD_GAMES);

    // socket.io watcher for events
    this.addWatcher()
  }
}
</script>

