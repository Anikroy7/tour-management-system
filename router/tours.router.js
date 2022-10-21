const express = require('express');
const toursController = require('../controller/tours.controller')

const router = express.Router();

router.route('/')
    .get(toursController.getAlltours)
    .post(toursController.postAtour)


module.exports = router;    