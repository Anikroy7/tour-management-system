const express = require('express');
const cors = require('cors');
const e = require('express');
const app = express();

// middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Route is working")
})

module.exports = app