var express = require('express');
var bcrypt = require('bcryptjs');
var _ = require('lodash');
var md5 = require('md5');
var db = require('../config/db');
var router = express.Router();

var {passwordToHass, passwordToCompare} = require('./../utils/hassing');

// console.log ( ip.address() );

/* GET login page. */
router.get('/', function(req, res, next) {
  if(req.session.login){
    res.redirect('/dashboard');
  } else {
    res.render('login', { title: 'Login | TM::SOHELFSF', bodyClass: 'centered-form', success: req.session.success, error: req.session.error, has_login: false });
  }
});


/* POST login listing. */
router.post('/', function(req, res, next) {
  if(req.session.login){
    res.redirect('/dashboard');
  } else {
    db.query('SELECT * FROM users WHERE xemail = "'+req.body.email+'" AND zpwdh="'+md5(req.body.password)+'"', function (error, results, fields) {
      if(error) throw error;
      if(results.length > 0){
        req.session.success = true;
        req.session.login = true;
        req.session.user_id = results[0].user_id;
        req.session.user_fullname = results[0].xname;
        req.session.user_email = results[0].zemail;
        req.session.user_access = results[0].xaccess;
        res.redirect('/dashboard');
      } else {
        req.session.success = false;
        req.session.error = [{ msg: 'User invalid.' }];
        res.redirect('/');
      }
    });
  }
});
module.exports = router;

