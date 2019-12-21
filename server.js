const express = require('express');
const carsRouter = require('./routers/carsRouter');
const helmet = require('helmet');
const server = express();

server.use(helmet())
server.use(express.json())
server.use('/api/cars', carsRouter)

server.get('/', ( req, res ) => {
    res.send('<h1>Life is Fair 4 Me</h1>')
})

module.exports = server;