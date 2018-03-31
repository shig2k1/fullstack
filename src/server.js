import chokidar from 'chokidar'
import config from '../webpack.config'
import express from 'express'
import http from 'http'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const compiler = webpack(config)
const app = express()

import { LOBBY_EVENTS, GAME_EVENTS } from './enums/socketio-events'

// web-server
const _server = http.createServer(app)
global.io = require('socket.io')(_server.listen(3000, 'localhost', (err)=>{
  if(err) throw err;
  console.log('listening...')
}))

// socket.io
io.sockets.on('connection', socket => {
  console.log('a user connected')

  // Message sent from lobby
  socket.on(LOBBY_EVENTS.CLIENT_SENT_MESSAGE, ({ gameId, playerId, message })=>{
    console.log('sent message', message)
    const { name } = games[gameId].players[playerId]
    const now = new Date().getTime()
    const payload = {
      playerId: playerId,
      ts: now,
      from: name,
      message: message
    } 
    console.log('payload', payload)
    // broadcast to 
    io.emit(`game-${gameId}`, {
      event: LOBBY_EVENTS.SERVER_NEW_MESSAGE,
      payload: payload
    })
  })

  // make socket available
  global.socket = socket

  // global socket is unrelable - register all events here
  socket.on(GAME_EVENTS.FLIP_CARD, ({ gameId, data}) => {
    const { x, y } = data
    // update the tile in the map array
    games[gameId].tilemap[y][x].flipped = !games[gameId].tilemap[y][x].flipped

    // broadcast to 
    io.emit(`game-${gameId}`, {
      event: GAME_EVENTS.TILEMAP_UPDATED,
      payload: games[gameId].tilemap
    })
  })

  // start a game
  socket.on(GAME_EVENTS.START_GAME, ({ gameId }) => {
    // broadcast to 
    io.emit(`game-${gameId}`, {
      event: GAME_EVENTS.START_GAME
    })
  })

  // user left
  socket.on('disconnect', ()=>{
    console.log('a user disconnected')
  })
})


// serve hot-reloading bundle to the client
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

// include server routes as middleware
app.use(function(req, res, next){
  require('./server/index.js')(req, res, next)
})


// anything else gets passed to the client app's server render

// do 'hot-reloading' of express stuff on the server
// throw away cached modules and re-require them next time
const watcher = chokidar.watch('./src/server')

watcher.on('ready', ()=>{
  watcher.on('all', ()=>{
    console.log('clearing server module cache from server')
    Object.keys(require.cache).forEach(id=>{
      if (/[\/\\]server[\/\\]/.test(id)) delete require.cache[id]
    })
  })
})

compiler.plugin('done', ()=>{
  console.log('clearing client module cache from serevr')
  Object.keys(require.cache).forEach(id=>{
    if (/[\/\\]client[\/\\]/.test(id)) delete require.cache[id]
  })
})