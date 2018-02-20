
var mysql = require('mysql');
var connection = mysql.createConnection({
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hisaab'
});
connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected");
    } else {
        console.log("Error while connecting with database");
    }
});
module.exports = connection;