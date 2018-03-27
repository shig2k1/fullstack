import Vue from 'vue'

export const state = {
  // game id of current game
  game: null,

  // game environment state
  availableGames: {}
}

export const ACTIONS = {
  CREATE_GAME: 'CREATE_GAME',
  LOAD_GAMES: 'LOAD_GAMES',
  JOIN_GAME: 'JOIN_GAME'
}

export const MUTATIONS = {
  UPDATE_GAMES: 'UPDATE_GAMES',
  JOIN_GAME: 'JOIN_GAME'
}

export const actions = {
  [ACTIONS.CREATE_GAME]({ state, commit }, { name, rounds}){
    return new Promise((res, rej)=>{
      Vue.http.post('/api/game/create', { name, rounds, owner: state.player.id })
      .then(suc=>{
        let { id } = suc.body.data.game
        commit(MUTATIONS.JOIN_GAME, id)
        res(suc)
      }, 
      err=>rej(err))
    })
  },

  [ACTIONS.LOAD_GAMES]({ state, commit }){
    return new Promise((res, rej)=>{
      Vue.http.get('/api/game/list')
      .then(suc=>{
        let { games } = suc.body.data
        console.log('games', games)
        commit(MUTATIONS.UPDATE_GAMES, games)
        res(suc)
      },
      err=>rej(err))
    })
  },

  [ACTIONS.JOIN_GAME]({ state, commit }, { gameId, playerId } ){
    console.log('id', gameId, playerId)
    return new Promise((res, rej)=>{
      Vue.http.post(`/api/game/join/${gameId}`, { playerId })
      .then(suc=>{
        console.log('joined the game!!!')
        commit(MUTATIONS.JOIN_GAME, gameId)
        res(suc)
      },
      err=>rej(err))
    })
  }
}

export const mutations = {
 [MUTATIONS.UPDATE_GAMES](state, games){
   state.availableGames = { ...games }
 },

 [MUTATIONS.JOIN_GAME](state, id){
   state.game = id
 }
}
