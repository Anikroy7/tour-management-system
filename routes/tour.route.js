const express = require('express');
const { get } = require('mongoose');
const router = express.Router();
const tourController = require('../controller/tour.controller')


router.route('/trending')
    .get(tourController.getTrendingTour)

router.route('/cheapest')
    .get(tourController.getCheapestTour)

router.route('/:id')
    .patch(tourController.updateATourById)


module.exports = router;    