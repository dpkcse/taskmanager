var app = require('express');
var db = require('../config/db');
var _ = require('lodash');
var moment = require('moment');
var router = app.Router();

function saveActivity(data,callback){
    var post  = {
        cat_id:'2',
        title: data.taskName,
        description: data.description,
        status: data.status,
        created_by: data.created_by,
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

var generateMessage = (from, text) => {
    return {
      from,
      text,
      createdAt: new Date().getTime()
    };
  };

var saveAssignee = (data,callback) =>{
    var post = [];
    _.each(data.assignlis,function(v,k){
        post.push(['',data.activity_id, v,data.tagged_by,new Date(),data.user_type]);
    });

    db.query('DELETE FROM activity_refer WHERE activity_id ='+data.activity_id, function (error, results, fields) {
        if (error){
            callback({status:false,error:error});
        }else{
            db.query('INSERT INTO activity_refer values ?', [post], function (error, results, fields) {
                if (error){
                    callback({status:false,error:error});
                }else{
                    callback({status:true,results:results});
                }
            });
        }
    });
};

var saveTag = (data, callback)=>{

    var post  = {
        title: data.tittle,
        tagged_by: data.tagged_by,
        activity_id: data.activity_id,
        tagged_at: new Date()
    };

    db.query('INSERT INTO tags SET ? ', post, function (error, results, fields) {
        if (error){
            callback({status:false,error:error});
        }else{
            callback({status:true,results:results});
        }
    });
};

module.exports = {
    saveActivity,
    generateMessage,
    saveAssignee,
    saveTag
};