const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsController.getAllTrips)
    .post(tripsController.tripsAddTrip);

router
    .route('/trip/:tripCode')
    .get(tripsController.getTripByCode)
    .put(tripsController.tripsUpdateTrip)
    .delete(tripsController.tripsDeleteTrip);

module.exports = router;