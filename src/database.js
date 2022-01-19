const mysql = require('mysql');
const e = require("express");

const mysqlConnection = mysql.createConnection({
    host:'us-cdbr-east-05.cleardb.net',
    user:'b4055405d45cb7',
    password:'e9ae2616',
    database:'heroku_ed507f11fb8ee5e'
});

mysqlConnection.connect((e)=>{
    if (e){
        console.log(e);
        return;
    } else {
        console.log(`Db is connected`);
    }
});

module.exports = mysqlConnection;