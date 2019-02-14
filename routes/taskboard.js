var express = require('express');
var _ = require('lodash');
var db = require('../config/db');
var router = express.Router();

// Load Input Validation
const validateActivityEntryInput = require('../validation/activity_entry');


// render dashboard after successfully login
router.get('/', function(req, res, next){
    if(req.session.login){
        var res_data = [];
        res_data.user_id = req.session.user_id;
        res_data.user_fullname = req.session.user_fullname;
        res_data.user_email = req.session.user_email;
        res_data.user_access = req.session.user_access;
        res_data.title = 'Task List | TM::SOHELFSF';
        res_data.page_title = 'Task List ';

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
        
        res.render('taskbar',res_data);
    } else {
        res.redirect('/');
    }
});

// Post method use for activity insert
router.get('/activity_insert', function(req, res, next){
    const { errors, isValid } = validateActivityEntryInput(req.body);

    if (!isValid) {
        req.session.error = [{ errors: errors }];
        res.redirect("/taskboard");
    }else{
        var post  = {
            cat_id:'1000',
            title: req.body.email,
            description: req.body.name,
            status: req.body.access,
            start_date: 'ALL',
            end_date: '1',
            lavel: req.body.email,
            priority: md5(req.body.password)
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

module.exports = router;