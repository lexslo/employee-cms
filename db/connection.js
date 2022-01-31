const mysql = require("mysql2");

require('dotenv').config();
const pe = process.env;

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    user: pe.DB_USER,
    password: pe.DB_PW,
    database: pe.DB_NAME,
});

module.exports = db;