import express from 'express'
import bodyParser from 'body-parser'

const app = express.Router()
// parse application/json (without this, incoming POSTs cannot be JSON)
app.use(bodyParser.json());

import modules from './modules'

// all players
global.players = {};

// all games
global.games = {};

import { create_player } from './modules/player'
import { list_games, create_game, join_game } from './modules/game'


import { LOBBY_EVENTS, GAME_EVENTS } from '../enums/socketio-events'



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

registerGameSocket();

// Message sent from lobby
socket.on(LOBBY_EVENTS.CLIENT_SENT_MESSAGE, ({ message, gameId })=>{
  // broadcast to 
  io.emit(`game-${gameId}`, {
    event: LOBBY_EVENTS.SERVER_NEW_MESSAGE,
    payload: {
      message
    }
  })
})


// create a new player
app.post('/api/player/create', create_player)

// create new game
app.post('/api/game/create', create_game)

// join existing game
app.post('/api/game/join/:id', join_game)

// list joinable games
app.get('/api/game/list', list_games)

module.exports = app;