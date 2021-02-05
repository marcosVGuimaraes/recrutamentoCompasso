var mysql = require('mysql2-promise')();

mysql.configure({
	"host": "localhost",
	"user": "root",
	"password": "",
	"database": "db_compasso",
	waitForConnections: true,
	connectionLimit: 100,
	queueLimit: 0
});


module.exports = function() {
	return mysql;
}