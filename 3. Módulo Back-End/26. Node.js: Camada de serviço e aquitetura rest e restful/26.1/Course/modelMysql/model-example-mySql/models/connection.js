const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'ramon',
  password: 'Terra*1990',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;
