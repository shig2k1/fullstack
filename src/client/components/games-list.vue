<template lang="pug">
  page-layout
    div(slot="top")
      h3 Lobby

    div(slot="middle")
      div(v-if="availableGames.length < 1") No available games

      ul(v-else)
        li(v-for="game in availableGames",
        :key="JSON.stringify(game)") 
          a(@click="joinGame(game)") {{ game.name }}

      v-dialog(v-model="dialog",
      scrollable,
      maxWidth="600")
        v-card
          v-card-title
            span.header Create a Game
          v-divider
          v-card-text
            v-text-field(type="text", 
            v-model="newGameModel.name",
            label="Name",
            hint="Give your game a name",
            :disabled="newGameModel.disabled")

            v-text-field(type="number",
            v-model="newGameModel.rounds"
            label="Number of rounds",
            hint="How many rounds you want to play",
            :disabled="newGameModel.disabled")
          v-divider
          v-card-actions
            v-spacer
            v-btn(@click="createGame",
            :disabled="newGameModel.disabled").primary OK
            v-btn(@click="cancelCreateGame") Cancel

    div(slot="bottom")
      v-btn(block,
      @click="showCreateGameDialog").primary Create game
</template>

<script>
import pageLayout from './page-layout.vue'

import {ACTIONS} from '../store/modules/game.store'

export default {
  components: {
    pageLayout
  },

  data:()=>({
    dialog: false,

    newGameModel: {
      name: 'New game',
      rounds: 3,
      disabled: false
    }
  }),

  computed: {
    availableGames(){
      return [ 
        ...Object.keys(this.$store.state.availableGames)
        .map((key)=>{
          return { name } = this.$store.state.availableGames[key]
        })
      ]
    }
  },

  sockets: {
    gamesListUpdated(data){
      // new games added - update
      console.log('game added, reloading...')
      this.loadGames();
    }
  },

  methods: {
    loadGames(){
      this.$store.dispatch(ACTIONS.LOAD_GAMES)
      .then(()=>{
        console.log('loaded - might have a spinner maybe?')
      })
    },

    showCreateGameDialog(){
      this.dialog = true
    },

    createGame(){
      this.newGameModel.disabled = true

      let { name, rounds } = this.newGameModel

      this.$store.dispatch(ACTIONS.CREATE_GAME, { name, rounds })
      .then(suc=>{
        console.log('game-created')
        this.dialog = false;
      }, err=>{
        console.log('err', err)
      })
    },

    cancelCreateGame(){
      this.dialog = false
    },

    joinGame({ id }){
      let data = { gameId: id, playerId: this.$store.state.player.id }

      console.log(JSON.stringify(data))
      this.$store.dispatch(ACTIONS.JOIN_GAME, { gameId: id, playerId: this.$store.state.player.id })
      
      .then(suc=>{
        console.log('game-joined', id)
        this.dialog = false;
      }, err=>{
        console.log('err', err)
      })
    }
  },

  beforeMount(){
    // fetch games into state
    this.$store.dispatch(ACTIONS.LOAD_GAMES)
  }
}
</script>

