var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host     : 'db4free.net',
//     user     : 'hyper_admin123',
//     password : 'ZhXHxf9ZZQgHdir',
//     database : 'hyper_mms007'
// });

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'hyper_mms007'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;