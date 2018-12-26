var express = require('express');
var router = express.Router();
var db = require('../config/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  // try{
  //   db.query('SELECT * from users', function (error, results, fields) {
  //     if (error) throw error;
  //     console.log('The solution is: ', results);
  //     res.render('dashboard', { title: 'Express'});
  //   });
    
  // }catch(err){
  //   console.log(err);
  // }
  res.render('dashboard', { title: 'Express' });
});

module.exports = router;
