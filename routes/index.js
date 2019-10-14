var express = require('express');
var router = express.Router();
var userController = require('../controllers/userControllers')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/allCondition', function(req, res, next) {
    userController.getcondition(req,res)
});

module.exports = router;