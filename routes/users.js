var express = require('express');
var _ = require('lodash');
var db = require('../config/db');
var md5 = require('md5');
var router = express.Router();

// Load Input Validation
const validateUserEntryInput = require('../validation/member_entry');


/* GET users entry page. */
router.get('/entry', function(req, res, next) {
  if(req.session.login){
    var res_data = [];
    res_data.user_id = req.session.user_id;
    res_data.user_fullname = req.session.user_fullname;
    res_data.user_email = req.session.user_email;
    res_data.user_access = req.session.user_access;
    res_data.title = 'Member Entry | TM::SOHELFSF';
    res_data.page_title = 'Member Entry Form';
    if(req.session.error != undefined){
      if(req.session.error[0].errors != ''){
        res_data.errors = req.session.error[0].errors;
      }else{
        res_data.errors = 'NA';
      }
    }else{
      res_data.errors = 'NA';
    }

    if(req.session.msg != undefined){
      res_data.msg = req.session.msg;
    }else{
      res_data.msg = 'NA';
    }
    
    res.render('add_user',res_data);
  } else {
      res.redirect('/');
  }
});

/* POST users entry. */

router.post('/entry', function(req,res,next){
  const { errors, isValid } = validateUserEntryInput(req.body);
  // Check Validation
  if (!isValid) {
    req.session.error = [{ errors: errors }];
    res.redirect("/users/entry");
  }else{
    db.query('SELECT * FROM users WHERE xemail = "'+req.body.email+'"', function (error, results, fields) {
      if(error) throw error;

      if(results.length > 0){
        var errors = [];
        errors.name = 'Try with another email. this email already registered';
        req.session.error = [{ errors: errors }];
        res.redirect("/users/entry");
      }else{
        var post  = {
          zid:'1000',
          zemail: req.body.email,
          xname: req.body.name,
          xaccess: req.body.access,
          xarea: 'ALL',
          zactive: '1',
          xemail: req.body.email,
          zpwdh: md5(req.body.password)
        };

        db.query('INSERT INTO users SET ?', post, function (error, results, fields) {
          if (error){
            var errors = [];
            errors.name = 'Something with insert query';
            req.session.error = [{ errors: errors }];
            res.redirect("/users/entry");
          }else{
            console.log('insertId:',results.insertId);
            req.session.msg = 'Successfully Inserted';
            res.redirect("/users/entry");
          }
        });
      }
    });
  }
});


// Get Member list

/* GET users entry page. */
router.get('/member_list', function(req, res, next) {
  if(req.session.login){
    var res_data = [];
    res_data.user_id = req.session.user_id;
    res_data.user_fullname = req.session.user_fullname;
    res_data.user_email = req.session.user_email;
    res_data.user_access = req.session.user_access;
    res_data.title = 'Member List | TM::SOHELFSF';
    res_data.page_title = 'Member List';
    res_data._ = _;
    
    if(res_data.user_access == 1){
      db.query('SELECT * FROM users WHERE xemail != "'+req.session.user_email+'"', function (error, results, fields) {
        if(error){
          console.log(error);
        }else{
          res_data.memberlist = results;
          res.render('member_list',res_data);
        }
      });
    }else{
      var memberlist = [];
      res_data.memberlist = memberlist;
      res.render('member_list',res_data);
    }
  } else {
      res.redirect('/');
  }
});

module.exports = router;
