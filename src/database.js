const mysql = require('mysql');
const e = require("express");

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'apiesp32alexa'
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