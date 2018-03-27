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

// create a new player
app.post('/api/player/create', create_player)

// create new game
app.post('/api/game/create', create_game)

// join existing game
app.post('/api/game/join/:id', join_game)

// list joinable games
app.get('/api/game/list', list_games)

module.exports = app;