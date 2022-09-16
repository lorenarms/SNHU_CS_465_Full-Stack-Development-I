const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsController.getAllTrips);

router
    .route('/trip/:tripCode')
    .get(tripsController.getTripByCode);

module.exports = router;