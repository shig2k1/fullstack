import uuid from 'uuid'
import _ from 'lodash'

import { LOBBY_EVENTS, GAME_EVENTS } from '../../enums/socketio-events'
import { CARD_VARIATIONS as CV } from '../../enums/card-variations'

export const ACTIONS = {
  PLAYER_JOINED: 'PLAYER_JOINED',
  PLAYER_LEFT: 'PLAYER_LEFT'
}

export const STATES = {
  WAITING_FOR_PLAYERS: 'WAITING_FOR_PLAYERS'
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function createTilemap(noOfPairs){

  // there will be #{noOfPairs} of each color of card
  // replace with pictures or whatever - this is just a test
  let deck = []  
  Object.keys(CV).forEach(color => {
    for(let i = 0; i < noOfPairs; i++){
      deck.push(color)
    }
  })
  
  shuffleArray(deck)
  // deck will be an even number. Get the square root and make a 
  // grid that size
  const rowLimit = Math.ceil(Math.sqrt(deck.length))
  let grid = []
  let row = []
  /* 
    Build an array of cards like this
    . . . . . .
    . . . . . .
    . . . . . .
    . . . . . .
    . . . . 
  */
  for(let i = 0, j = 0; i < deck.length; i++, j++){
    if(j == rowLimit){
      grid.push(row)
      row = []
      j = 0
    }
    row.push({
      flipped: false,
      color: deck[i]
    })
    if(i === (deck.length - 1) && j > 0) grid.push(row)
  }

  return grid
}


// Create a new game
export const create_game = (req, res) => {
  const { name, rounds, owner } = req.body;
  const noOfPairs = 4

  const game = {
    id: uuid(),
    name,
    rounds,
    owner,
    players: {},
    tilemap: createTilemap(noOfPairs),
    state: STATES.WAITING_FOR_PLAYERS
  }
  
  // add game to global games obj
  games[game.id] = game;

  // broadcast update to games list
  io.emit('gamesListUpdated', {
    msg: 'New game added'
  })

  res.json({ msg: 'game created', data: { game }})
}


// game lobby

// Return list of existing games - remove unnecessary bits
export const list_games = (req, res) => {
  res.json({ msg: 'games loaded', data: { 
    games: Object.keys(games).map(game => ({
      ..._.pick(games[game], ['id', 'name'])
    }))
  }})
}


// Join an existing game
export const join_game = (req, res) => {
  const { id } = req.params
  const { playerId } = req.body
  const game = games[id]
  if(game){
    // is the player already in this game
    const player = games[id].players[playerId]
    if(!player) games[id].players[playerId] = {
      name: players[playerId].name,
      score: 0
    }
    io.emit(`game-${id}`, { action: ACTIONS.PLAYER_JOINED })
  }

  res.json({ 
    msg: 'joined game', 
    data: { 
      game: game
    } 
  })
}