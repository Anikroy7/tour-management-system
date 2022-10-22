const express = require('express');
const toursController = require('../controller/tours.controller');
const viewCount = require('../middleware/viewCount');

const router = express.Router();

router.route('/')
    .get(toursController.getAlltours)
    .post(toursController.postAtour)

router.route('/:id')
    .get(viewCount, toursController.getAtourById)

module.exports = router;    