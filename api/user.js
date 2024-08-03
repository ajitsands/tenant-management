const express = require('express');
const router = express.Router();
const mysql = require('../db');
router.post('/user', (req, res) => {
    const {name, email, contactNumber, userType, userName,
        confirmPassword} = req.body;   
    const query = `INSERT INTO tbl_users(names,user_name,password,email,contact_no,
        user_type) VALUES (?,?,?,?,?,?)`;
    mysql.query(query, [name, userName, confirmPassword, email, contactNumber,
        userType], (err, result) => {
        if(err){
            console.log(err);
            res.status(500).send("Server Error : "+err);
        }
        else{
            console.log("User Added Successfully");
            res.status(200).send("User Added Successfully");        
        }
    })
});
router.get('/user', (req, res) => {
    const query = `SELECT * FROM tbl_users`;
    mysql.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Server Error: " + err);
        } else {
            res.json(result);
        }
    });
});
module.exports = router