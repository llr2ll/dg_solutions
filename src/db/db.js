async function connect (){
	if(global.connection && global.connection.state !== 'disconected'){return global.connection;}
	const mysql = require("mysql2/promise")
	const connection = await mysql.createConnection('mysql://xn3nauq92r57:pscale_pw_nO0mASSiYCtrX9ZSGIe-hYEsjty09xqWNNxyL3lOp2Y@t3071viq0k1g.aws-sa-east-1-1.psdb.cloud/dg_solutions?ssl={"rejectUnauthorized":true}')
	global.connection = connection;
	return connection;
}

async function selectUsuarios(){
	const users = await connect();
	const rows = users.query('SELECT * FROM usuario');
	return await rows;
}

async function insertUsuarios(user){
	const users = await connect();
	const sql = 'INSERT INTO usuario(nome,dataNascimento) VALUES (?,?);';
	const values = [user.nome, user.dataNascimento];
	return await users.query(sql, values);
}

async function updateUsuarios(id, user){
	const users = await connect();
	const sql = 'UPDATE usuario SET nome=?, dataNascimento=? WHERE id=?';
	const values = [user.nome, user.dataNascimento, id];
	return await users.query(sql, values);
}

async function deleteUsuarios(id){
	const users = await connect();
	const sql = 'Delete FROM usuario WHERE id=?';
	return await users.query(sql, [id]);
}

module.exports = {selectUsuarios, insertUsuarios, updateUsuarios, deleteUsuarios}