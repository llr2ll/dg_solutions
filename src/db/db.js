const mysql = require("mysql2/promise")

const pool = mysql.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: 'p@ssw0rd',
	port: 3306,
	database: 'dg_solutions',
	//ssl: {} 
})

module.exports = pool