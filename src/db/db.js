import { createPool } from "mysql2/promise"

const pool = createPool({
	host: 't3071viq0k1g.aws-sa-east-1-1.psdb.cloud',
	user: '1qav6sezikas',
	password: 'pscale_pw_OjZG-jhb7hWtYCq4EgVcqQyl8TzaajLuBZ2Hs8Qs0_s',
	port: 3306,
	database: 'dg_solutions',
	ssl: {}
})

export { pool }