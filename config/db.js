var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host     : 'db4free.net',
//     user     : 'hyper_admin123',
//     password : 'ZhXHxf9ZZQgHdir',
//     database : 'hyper_mms007'
// });

var connection = mysql.createConnection({
    host     : '172.16.0.64',
    user     : 'root',
    password : 'YeezY@001',
    database : 'taskmanager'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;