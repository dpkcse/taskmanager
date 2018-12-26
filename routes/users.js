var express = require('express');
var router = express.Router();
var db = require('../config/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  try{
    db.query('SELECT * from users', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
      res.render('dashboard', { title: 'Express'});
    });
    
  }catch(err){
    console.log(err);
  }
  
});

module.exports = router;
