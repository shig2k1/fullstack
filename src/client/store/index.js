import Vue from 'vue'
import VueX from 'vuex'

import localforage from 'localforage'

import { state as game_state, 
         actions as game_actions, 
         getters as game_getters,
         mutations as game_mutations
       } from './modules/game.store'

export const ACTIONS = {
  INIT_APP: 'INIT_APP',
  CREATE_PLAYER: 'CREATE_PLAYER',
  LOAD_PLAYER: 'LOAD_PLAYER'
}

export const MUTATIONS = {
  UPDATE_PLAYER: 'UPDATE_PLAYER',
}

// init localstorage
localforage.config({
  name: 'rock-paper-scissors'
})

Vue.use(VueX)

const state = {
  count: 0,

  // current player
  player: {
    id: null,
    name: null
  },

  ...game_state
}

const actions = {
  /**
   * Initial load - find current player - or create a new player
   */
  [ACTIONS.INIT_APP]({ state, dispatch, commit }){
    // look in localstorage for an existing player
    localforage.getItem('player', (err, player) => {
      if(player) {
        // check server for existance of this player
        dispatch(ACTIONS.LOAD_PLAYER, { playerId: player.id })
      } else {
        dispatch(ACTIONS.CREATE_PLAYER)
      }
    })
    // look for a game in progress
    localforage.getItem('current_game', (err, game) => {
      if(game){

      }
    })
  },
  
  [ACTIONS.CREATE_PLAYER]({ state, commit }){
    Vue.http.post('/api/player/create')
    .then(suc => {
      console.log('success', suc)
      let { player } = suc.body.data
      localforage.setItem('player', player); 
      commit(MUTATIONS.UPDATE_PLAYER, player)
    }, err => {
      console.log('err', err)
    })
  },

  [ACTIONS.LOAD_PLAYER]({ state, commit, dispatch }, { playerId }){
    Vue.http.get(`/api/player/${playerId}`)
    .then(suc => {
      console.log('player does exist. loading')
      let { player } = suc.body.data
      localforage.setItem('player', player); 
      commit(MUTATIONS.UPDATE_PLAYER, player)
    }, err => {
      // player doesn't exist - create instead
      console.log(`player doesn't exist - creating`)
      dispatch(ACTIONS.CREATE_PLAYER)
    })
  },

  ...game_actions
}

const mutations = {
  [MUTATIONS.UPDATE_PLAYER](state, player){
    state.player = { ...player }
  },

  ...game_mutations
}

const getters = {
  player: state => state.player || {},

  ...game_getters
}

export const store = new VueX.Store({
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
})