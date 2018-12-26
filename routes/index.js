var express = require('express');
var router = express.Router();
var db = require('../config/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  try{
    db.query('SELECT * from users', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      
    });
    console.log('ss');
    res.render('index', { title: 'Express',results:results });
  }catch(err){
    console.log(err);
  }
});

module.exports = router;
