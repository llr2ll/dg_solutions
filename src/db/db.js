const mysql = require("mysql2/promise")

const pool = mysql.createPool({
	host: 't3071viq0k1g.aws-sa-east-1-1.psdb.cloud',
	user: 'ijfl5ha31x4n',
	password: 'pscale_pw_5Mwniz7bXIMoIqWdrVYlj77K84wQs6ddJAr7iXjCaq0',
	port: 3306,
	database: 'dg_solutions',
	ssl: {} 
})

module.exports = pool