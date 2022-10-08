const express = require('express');
const router = express.Router();

const authController = require('../controllers/authentication')
const tripsController = require('../controllers/trips');

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

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