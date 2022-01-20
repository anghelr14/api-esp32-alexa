const mysql = require('mysql');
const e = require("express");

var pool = mysql.createPool({
    host:'us-cdbr-east-05.cleardb.net',
    user:'b4055405d45cb7',
    password:'e9ae2616',
    database:'heroku_ed507f11fb8ee5e'
});

pool.getConnection(function(err, connection) {
    console.log(err);
    connection.destroy();
});

module.exports = pool;