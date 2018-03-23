import express from 'express'

const app = express.Router()

app.get('/api', (req, res)=>{
    res.send('I can probably build new routes off of this...')
})

module.exports = app;

