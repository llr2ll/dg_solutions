const mysql = require("mysql2/promise")

const pool = mysql.createPool({
	host: 't3071viq0k1g.aws-sa-east-1-1.psdb.cloud',
	user: 'vwaxy92qd21d',
	password: 'pscale_pw_4qmbc9WaSULcewRqInmX3jePRHATaAvEqy9F7pAtvxg',
	port: 3306,
	database: 'dg_solutions',
	ssl: {} 
})

module.exports = pool