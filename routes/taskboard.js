var express = require('express');
var _ = require('lodash');
var moment = require('moment');
var db = require('../config/db');

var router = express.Router();

// Load Input Validation
const validateActivityEntryInput = require('../validation/activity_entry');
var {allActivity, activity_detail,getUserDetailByid, getAllusers,getAllTaggedUsers,getAllTags} = require('../utils/activity');

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
        res_data._ = _;


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

        var all_activity = [];

        allActivity(req.session.user_id,(response)=>{
            if(response.status){
                res_data.all_activity = response.results;
                res.render('taskbar',res_data);
            }else{
                res.render('taskbar',res_data);
            }
        });
        
        
    } else {
        res.redirect('/');
    }
});

// render dashboard after successfully login
router.get('/taskDetail/:id', async function(req, res, next){
    if(req.session.login){
        var res_data = [];

        res_data.user_id = req.session.user_id;
        res_data.user_fullname = req.session.user_fullname;
        res_data.user_email = req.session.user_email;
        res_data.user_access = req.session.user_access;
        res_data.page_title = 'Task Detail';
        res_data._ = _;
        res_data.moment = moment;
        res_data.activity_id = req.params.id;
        
        var allusers = await getAllusers(req.session.user_id);
        var activityDetail = await activity_detail(req.params.id).catch((error)=>{console.log(error)});
        var allTaggedUsers = await  getAllTaggedUsers(req.params.id).catch((error)=>{console.log(error)});
        var allTags = await  getAllTags(req.params.id).catch((error)=>{console.log(error)});

        res_data.allusers = allusers.results;
        var userList = {};
        
        _.forEach(allusers.results, function(value) {
            userList[value.user_id ] = value.xname;
        });

        var taggedUserArray= [];
        var tagsArray= [];
        
        _.forEach(allTaggedUsers.results, function(value) {
            if(value.user_id != req.session.user_id){
                taggedUserArray.push(value.user_id);
            }
        });

        _.forEach(allTags.results, function(value) {
            tagsArray.push(value.title);
        });

        res_data.tags = tagsArray.join(',');
        res_data.activity = activityDetail.results;
        res_data.taggedUserArray = taggedUserArray;
        res_data.taggedUserStr = taggedUserArray.join(',');
        res_data.title = res_data.activity[0].title;
        res_data.crteatedByName = userList[res_data.activity[0].created_by];
        res_data.crteatedById = res_data.activity[0].created_by;
        
        res.render('task_detail',res_data);

    } else {
        res.redirect('/');
    }
});

module.exports = router;