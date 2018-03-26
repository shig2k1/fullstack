import Vue from 'vue'
import VueX from 'vuex'

import localforage from 'localforage'

import { state as game_state, 
         actions as game_actions, 
         mutations as game_mutations
       } from './modules/game.store'

export const ACTIONS = {
  INIT_APP: 'INIT_APP',
  CREATE_PLAYER: 'CREATE_PLAYER'
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
    localforage.getItem('player', (err, player)=>{
      if(player) {
        commit(MUTATIONS.UPDATE_PLAYER, player)
      } else {
        dispatch(ACTIONS.CREATE_PLAYER)
      }
    })
  },
  
  [ACTIONS.CREATE_PLAYER]({ state, commit }){
    Vue.http.post('/api/player/create')
    .then(suc=>{
      console.log('success', suc)
      let { player } = suc.body.data
      localforage.setItem('player', player); 
      commit(MUTATIONS.UPDATE_PLAYER, player)
    }, err=>{
      console.log('err', err)
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
  
}

export const store = new VueX.Store({
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
})