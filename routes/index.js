var express = require('express');
var router = express.Router();
var db = require('../config/db');

router.get('/', function(req,res,next){
    res.render('dashboard');
});

module.exports = router;