const express = require('express');
const cors = require('cors');
const app = express();
const toursRouter = require('./router/tours.router')

// middleware
app.use(express.json())
app.use(cors())

// declare the routes
app.use('/tours', toursRouter)

// test route
app.get('/', (req, res) => {
    res.send("Route is working")
})

module.exports = app;