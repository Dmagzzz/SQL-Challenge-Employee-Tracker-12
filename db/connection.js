const mysql  = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost", 
    user:"root",
    password:"Dev@1234",
    database:"employees"
})

connection.connect(err=>console.log(err))
module.exports=connection