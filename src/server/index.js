import express from 'express'

const app = express.Router()

import api from './api'

app.get('/api', (req, res)=>{
    res.send('Hi there Gem - hee!')
})

app.post('/api/data', api)

//app.get('/other', api)

module.exports = app;

