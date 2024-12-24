const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const dbConfig = require('../config/dbConfig');
const router = require('./routes');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use('/',router);

// Database 
const mysql = require('mysql');
const connection = mysql.createConnection(dbConfig);
connection.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err);
        return;
    }
    console.log('Connected to database[mysql].');
});

//server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}...`);
});