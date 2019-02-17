
module.exports = function (io) {    
    var app = require('express');
    var moment = require('moment');
    const validateActivityEntryInput = require('../validation/activity_entry');
    var router = app.Router();
    var {
        saveActivity
    } = require('../utils/update');

    io.on('connection', function (client) {
        console.log('Client connected...');
        
        client.on('join', function (data) {
            console.log(data);
        });

        client.on('activty_entry', function (data,callback) {
        
            const { errors, isValid } = validateActivityEntryInput(data.data_obj);

            if (!isValid) {
                callback({ errors });
            }else{
                saveActivity(data.data_obj,(response)=>{
                    callback({ response });
                });
            }
        });        
        
    });

    return router;
}