var mysql = require('promise-mysql');

pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'olimpia',
  connectionLimit: 10
});

module.exports = pool;