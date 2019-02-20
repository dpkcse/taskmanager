
module.exports = function (io) {    
    var app = require('express');
    var moment = require('moment');
    const validateActivityEntryInput = require('../validation/activity_entry');
    var router = app.Router();
    var {
        saveActivity,
        generateMessage,
        saveAssignee,
        saveTag
    } = require('../utils/update');

    io.on('connection', function (client) {
        console.log('Client connected...');
        
        client.on('join', function (data) {
            client.join('tm_007');
            client.join(data);
            client.handshake.session.data = data;
            client.handshake.session.save();

            if (alluserlist.indexOf(data) != -1) {
                console.log(data + ' is connected into socket');
            } else {
                alluserlist.push(data);
            }

            client.emit('online_user_list', generateMessage('Admin', alluserlist)); // this emit receive only who is login
            client.broadcast.emit('new_user_notification', generateMessage('Admin', client.handshake.session.data)); // this emit receive all users except me

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

        client.on('assignMember', function (data,callback) {
            saveAssignee(data,(response)=>{
                callback({ response });
            });
        });  

        client.on('tagSave', function (data,callback) {
            saveTag(data,(response)=>{
                callback({ response });
            });
        });        
        
    });

    return router;
}