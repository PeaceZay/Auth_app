let mysql = require("mysql");
// check syntax!!!!!
let connection = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST
})

connection.connect();

connection.query("select now()", function(err, result){
    if (err){
        console.log("Could not connect to the DB", err)
    }else {
        console.log("Connected to database:", result)
    }
})

module.exports = connection;