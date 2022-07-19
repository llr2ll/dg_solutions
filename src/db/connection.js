const mysql = require("mysql2/promise")


const pool = mysql.createPool({
	host: 't3071viq0k1g.aws-sa-east-1-1.psdb.cloud',
	user: 'xn3nauq92r57',
	password: 'pscale_pw_nO0mASSiYCtrX9ZSGIe-hYEsjty09xqWNNxyL3lOp2Y',
	port: 3306,
	database: 'dg_solutions',
	ssl: {}  // ssl={ "rejectUnauthorized": true }
})

module.exports = pool
