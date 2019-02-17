var app = require('express');
var db = require('../config/db');
var router = app.Router();

function allActivity(userid,callback){
    db.query("SELECT at_act.* FROM activities as at_act WHERE at_act.created_by = '"+userid+"'", function (error, results, fields) {
        if(error){
            callback({status:false,error:error});
        }else{
            callback({status:true,results:results});
        }
    });
}

function activity_detail(activityid,callback){
    db.query("SELECT at_act.* FROM activities as at_act WHERE at_act.id = '"+activityid+"'", function (error, results, fields) {
        if(error){
            callback({status:false,error});
        }else{
            callback({status:true,results});
        }
    });
}

function getUserDetailByid(userid,callback){
    db.query("SELECT user_id,xname,xemail FROM users WHERE user_id = '"+userid+"'", function (error, results, fields) {
        if(error){
            callback({status:false,error});
        }else{
            callback({status:true,results});
        }
    });
}

function getAllusers(userid){
    return new Promise((resolve,reject)=>{
        db.query("SELECT user_id,xname,xemail FROM users WHERE user_id != '"+userid+"'", function (error, results, fields) {
            if(error){
                reject({error});
            }else{
                resolve({results});
            }
        });
    });
}

module.exports = {
    getUserDetailByid,
    activity_detail,
    allActivity,
    getAllusers
};