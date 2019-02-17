var app = require('express');
var db = require('../config/db');
var router = app.Router();

function saveActivity(data,callback){
    var post  = {
        cat_id:'2',
        title: data.taskName,
        description: data.description,
        status: data.status,
        created_by: '1',
        start_date:data.startDate,
        end_date: data.endDate,
        priority: data.priority
    };

    db.query('INSERT INTO activities SET ?', post, function (error, results, fields) {
        if (error){
            callback({status:false,error:error});
        }else{
            callback({status:true,results:results});
        }
    });
}

module.exports = {
    saveActivity
};