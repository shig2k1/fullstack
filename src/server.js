import chokidar from 'chokidar'
import config from '../webpack.config'
import express from 'express'
import http from 'http'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const compiler = webpack(config)
const app = express()

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

const server = http.createServer(app)
server.listen(3000, 'localhost', (err)=>{
  if(err) throw err;

  const addr = server.address()
  console.log('listening...')
})