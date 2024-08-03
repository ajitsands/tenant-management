const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 's@nds1@b',
    database: 'building'
});

connection.connect((err) => {
    if(err){
        console.log(err);
    }
    console.log('connected');
});    

module.exports = connection