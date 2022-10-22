const express = require('express');
const cors = require('cors');
const app = express();
const toursRouter = require('./routes/tours.route');
const tourRouter = require('./routes/tour.route')


// middleware
app.use(express.json())
app.use(cors())

// declare the routes
app.use('/tours', toursRouter)
app.use('/tour', tourRouter)


// test route
app.get('/', (req, res) => {
    res.send("Route is working")
})

module.exports = app;