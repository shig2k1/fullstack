<template lang="pug">
  v-app
    v-layout(row)
      v-flex
        pre {{ $store.state }}
      v-flex
        div.layout
          // available games listing
          games-list(v-if="screen === GAME_SCREENS.GAMES_LIST")
          // game lobby
          game-lobby(v-else-if="screen === GAME_SCREENS.GAME_LOBBY")
          // game screen
          game-screen(v-else-if="screen === GAME_SCREENS.GAME_PLAY")

</template>

<script>

import { mapGetters } from 'vuex'

import { GAME_SCREENS } from '../enums/game-screens' 
import { ACTIONS } from './store'

import gamesList from './components/games-list.vue'
import gameLobby from './components/game-lobby.vue'
import gameScreen from './components/game-screen.vue'

export default {

  components: {
    gamesList,
    gameLobby,
    gameScreen
  },

  data: () => ({
    GAME_SCREENS: GAME_SCREENS
  }),

  computed: {
    ...mapGetters([
      'screen'
    ]),

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