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
    const query = `SELECT * FROM tbl_users order by ids desc`;
    mysql.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Server Error: " + err);
        } else {
            res.json(result);
        }
    });
});

router.put('/user/:ids', (req, res) => {
    const { ids } = req.params;
    const { name, email, contactNumber, userType, userName, confirmPassword } = req.body;

    const query = `
        UPDATE tbl_users 
        SET names = ?, user_name = ?, password = ?, email = ?, contact_no = ?, user_type = ? WHERE ids = ?`;
       
    mysql.query(query, [name, userName, confirmPassword, email, contactNumber, userType, ids], (err, result) => {
        if (err) {
            console.error('Error updating user:', err);
            res.status(500).send('Server Error: ' + err);
        } else {
            console.log('User updated successfully');
            res.status(200).send('User updated successfully');
        }
    });
});

router.delete('/user/:ids', (req, res) => {
    const { id } = req.params;

    // SQL query to delete a user by ID
    const query = `DELETE FROM tbl_users WHERE ids = ?`;

    mysql.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error deleting user:', err);
            res.status(500).send('Server Error: ' + err);
        } else {
            console.log('User deleted successfully');
            res.status(200).send('User deleted successfully');
        }
    });
});



module.exports = router;