var express = require('express');
var router = express.Router();
const controller = require('../controllers/main');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', controller.index);


module.exports = router;
