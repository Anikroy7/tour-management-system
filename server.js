const app = require('./app')
const colors = require('colors')
require('dotenv').config()
const mongoose = require("mongoose");

// declare the PORT
const port = process.env.PORT || 8080;

// connect with database
mongoose.connect(process.env.LOCAL_DATABASE)
    .then(() => {
        console.log("Db conneted successfully".rainbow)
    })


// listen the server
app.listen(port, () => {
    console.log(`Tour manangement system is runnuing at ${port}`.bold)
})