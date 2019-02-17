var express = require('express');
var _ = require('lodash');
var db = require('../config/db');
var router = express.Router();

// render dashboard after successfully login
router.get('/', function(req, res, next){
    if(req.session.login){
        var res_data = [];
        res_data.user_id = req.session.user_id;
        res_data.user_fullname = req.session.user_fullname;
        res_data.user_email = req.session.user_email;
        res_data.user_access = req.session.user_access;
        res_data.title = 'Dashboard | TM::SOHELFSF';
        res_data.page_title = 'Dashboard';
        res.render('dashboard',res_data);
    } else {
        res.redirect('/');
    }
});
module.exports = router;