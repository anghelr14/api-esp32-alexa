const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

router.get('/',(req, res) => {
  const query = 'SELECT * FROM users';
  mysqlConnection.query(query,(err,rows,fields) =>{
      if (!err){
          res.json(rows);
      } else{
          console.log(err);
      }
  });
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    mysqlConnection.query(query,[id],(err,rows,fields)=>{
       if (!err){
           res.json(rows[0]);
       } else{
           console.log(err);
       }
    });
});


module.exports = router;