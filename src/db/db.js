const mysql = require("mysql2/promise")

const pool = mysql.createPool({
	host: '',
	user: '',
	password: '',
	port: 3006,
	database: 'dg_solutions',
	ssl: {} 
})

module.exports = pool