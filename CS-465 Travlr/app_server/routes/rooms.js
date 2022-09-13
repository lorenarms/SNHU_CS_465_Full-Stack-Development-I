const express = require('express');
const router = express.Router();
const controller = require ('../controllers/rooms');

router.get('/', controller.rooms);

module.exports = router;