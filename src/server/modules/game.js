import uuid from 'uuid'

import { LOBBY_EVENTS, GAME_EVENTS } from '../../enums/socketio-events'

export const ACTIONS = {
  PLAYER_JOINED: 'PLAYER_JOINED',
  PLAYER_LEFT: 'PLAYER_LEFT'
}

export const STATES = {
  WAITING_FOR_PLAYERS: 'WAITING_FOR_PLAYERS'
}

function createTilemap(width, height){
  let map = [];
  for(let i=0; i< height; i++){
    map[i] = [];
    for(let j=0; j< width; j++){
      map[i][j] = {
        flipped: false
      }
    }
  }
  return map;
}

function registerGameSocket(){

  // socket.io
  socket.on(GAME_EVENTS.FLIP_CARD, ({ gameId, data}) => {
    console.log('Hi there', gameId, data)
  
    const { x, y, isFlipped } = data
    // update the tile in the map array
    games[gameId].tilemap[y][x].flipped = isFlipped
  
    console.log(games[gameId].tilemap[y][x])
  
    // broadcast to 
    io.emit(`game-${gameId}`, {
      event: GAME_EVENTS.TILEMAP_UPDATED,
      payload: games[gameId].tilemap
    })
  })

}

// Create a new game
export const create_game = (req, res) => {
  let { name, rounds, owner } = req.body;
  
  let game = {
    id: uuid(),
    name,
    rounds,
    owner,
    players: [owner],
    tilemap: createTilemap(10,10),
    state: STATES.WAITING_FOR_PLAYERS
  }
  
  // add game to global games obj
  games[game.id] = game;

  // broadcast update to games list
  io.emit('gamesListUpdated', {
    msg: 'New game added'
  })

  registerGameSocket()

  res.json({ msg: 'game created', data: { game }})
}


// game lobby

// Return list of existing games
export const list_games = (req, res) => {
  res.json({ msg: 'games loaded', data: { games }})
}


// Join an existing game
export const join_game = (req, res) => {
  let { id } = req.params
  let { playerId } = req.body
  let game = games[id]
  if(game){
    games[id].players.push(playerId)
    io.emit(`game-${id}`, { action: ACTIONS.PLAYER_JOINED })
  }

  registerGameSocket()

  res.json({ msg: 'player joined' })
}