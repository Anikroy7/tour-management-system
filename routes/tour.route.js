const express = require('express');
const router = express.Router();
const tourController = require('../controller/tour.controller')

router.route('/:id')
    .patch(tourController.updateATourById)


module.exports = router;    