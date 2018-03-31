import Vue from 'vue'
import { GAME_SCREENS } from '../../../enums/game-screens' 

export const state = {
  // game screen
  screen: GAME_SCREENS.GAMES_LIST,

  // game id of current game
  game: null,

  // game environment state
  availableGames: {},

  // messages
  messages: []
}

export const ACTIONS = {
  CREATE_GAME: 'CREATE_GAME',
  LOAD_GAMES: 'LOAD_GAMES',
  JOIN_GAME: 'JOIN_GAME',
  START_GAME: 'START_GAME',
  UPDATE_MAP: 'UPDATE_MAP',
}

export const MUTATIONS = {
  UPDATE_GAME_SCREEN: 'UPDATE_GAME_SCREEN',
  UPDATE_GAMES: 'UPDATE_GAMES',
  JOIN_GAME: 'JOIN_GAME',
  REPLACE_MAP: 'REPLACE_MAP',
  ADD_MESSAGE: 'ADD_MESSAGE',
  ADD_PLAYER: 'ADD_PLAYER',
  REMOVE_PLAYER: 'REMOVE_PLAYER'
}



export const actions = {
  [ACTIONS.CREATE_GAME]({ state, dispatch }, { name, rounds}){
    return new Promise((res, rej)=>{
      Vue.http.post('/api/game/create', { name, rounds, owner: state.player.id })
      .then(suc=>{
        let { id } = suc.body.data.game
        dispatch(ACTIONS.JOIN_GAME, { 
          gameId: id,
          playerId: state.player.id
        })
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
        console.log('suc', suc)
        let { game } = suc.body.data
        console.log('joined the game!!!')
        commit(MUTATIONS.JOIN_GAME, game)
        commit(MUTATIONS.UPDATE_GAME_SCREEN, GAME_SCREENS.GAME_LOBBY)
        res(suc)
      },
      err=>rej(err))
    })
  },

  [ACTIONS.START_GAME]({ state, commit }, { gameId }){
    console.log('start the game :D')
    Vue.http.post('')
  },

  [ACTIONS.UPDATE_MAP]({ state, commit }, { gameId, tilemap }){
    console.log('do it :p')
    commit(MUTATIONS.REPLACE_MAP, { gameId, tilemap })
  }
}

export const mutations = {
  [MUTATIONS.UPDATE_GAME_SCREEN]( state, screen ){
    state.screen = screen
  },

  [MUTATIONS.UPDATE_GAMES]( state, games ){
    state.availableGames = [ ...games ]
  },

  [MUTATIONS.JOIN_GAME]( state, game ){
    state.game = { ...game }
  },

  [MUTATIONS.REPLACE_MAP]( state, { tilemap } ){
    console.log('huh?')
    state.game.tilemap = [ ...tilemap ]
  },

  [MUTATIONS.ADD_MESSAGE]( state, message ){
    console.log('add new message', message)
    state.messages.push(message)
  },

  [MUTATIONS.ADD_PLAYER]( state, { gameId, player } ){
    state.game.players = {
      ...state.game.players,
      [player.id]: player
    }
  },

  [MUTATIONS.REMOVE_PLAYER]( state, { gameId, playerId } ){
    state.game[gameId].players = [ ..._.omit(state.game[gameId].players, playerId) ]
  }
}

export const getters = {
  screen: state => state.screen,

  game: state => state.game || {},

  messages: state => [ ...state.messages ]
}
