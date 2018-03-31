<template lang="pug">
  v-app
    v-layout(row)
      v-flex
        pre {{ $store.state }}
      v-flex
        div.layout
          // available games listing
          games-list(v-if="currentGame === null")
          // game lobby
          game-lobby(v-else)

</template>

<script>

import { ACTIONS } from './store'

import gamesList from './components/games-list.vue'
import gameLobby from './components/game-lobby.vue'

export default {

  components: {
    gamesList,
    gameLobby
  },

  computed: {
    currentGame(){
      return this.$store.state.game ? 
        this.$store.state.availableGames[this.$store.state.game] : 
        null
    }
  },

  methods: {
   
  },

  beforeCreate(){
    // create or load a player
    this.$store.dispatch(ACTIONS.INIT_APP)
  }
}
</script>

<style lang="scss">
@import '../../node_modules/vuetify/dist/vuetify.min.css';

</style>