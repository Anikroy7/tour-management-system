const app = require('./app')
const colors = require('colors')
require('dotenv').config()
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");

mongoose.connect(process.env.LOCAL_URI)
    .then(() => {
        console.log("Db conneted successfully".rainbow)
    })
app.listen(port, () => {
    console.log(`Tour manangement system is runnuing at ${port}`.bold)
})