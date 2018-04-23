import express from 'express'
import bodyParser from 'body-parser'

const app = express.Router()
// parse application/json (without this, incoming POSTs cannot be JSON)
app.use(bodyParser.json());


module.exports = app;