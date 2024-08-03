const express = require('express');
const router = express.Router();
const mysql = require('../db');
router.post('/building', (req, res) => {
    const {building_name, location, building_no, building_road, building_city,
         building_zip, Total_floors, Manager_name, Manager_contact} = req.body;   
    const query = `INSERT INTO building_info(building_name, building_location, building_no, building_road, building_area,
        building_postal_code, total_floors, manager_name, manager_contact) VALUES (?,?,?,?,?,?,?,?,?)`;
    mysql.query(query, [building_name, location, building_no, building_road, building_city,
        building_zip, Total_floors, Manager_name, Manager_contact], (err, result) => {
        if(err){
            console.log(err);
            res.status(500).send("Server Error : "+err);
        }
        else{
            console.log("Building Added Successfully");
            res.status(200).send("Building Added Successfully");        
        }
    })
});
router.get('/building', (req, res) => {
    mysql.query('SELECT * FROM building_info', (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        }
        console.log(results);
        res.json(results);
      }); 
  
});

// Update a building by ID
router.put('/building/:id', (req, res) => {
    const { id } = req.params;
    const { building_name, location, building_no, building_road, building_city,
        building_zip, Total_floors, Manager_name, Manager_contact } = req.body;

    const query = `UPDATE building_info SET building_name = ?, building_location = ?, building_no = ?, 
        building_road = ?, building_area = ?, building_postal_code = ?, total_floors = ?, 
        manager_name = ?, manager_contact = ? WHERE id = ?`;

    mysql.query(query, [building_name, location, building_no, building_road, building_city,
        building_zip, Total_floors, Manager_name, Manager_contact, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Server Error : " + err);
        } else {
            console.log("Building Updated Successfully");
            res.status(200).send("Building Updated Successfully");        
        }
    });
});
module.exports = router