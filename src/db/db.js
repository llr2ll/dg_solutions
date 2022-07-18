async function connect (){
	if(global.connection && global.connection.state !== 'disconected'){return global.connection;}
	const mysql = require("mysql2/promise")
	const connection = await mysql.createConnection('mysql://crsx82s84867:pscale_pw_eBZ6_RW7fHfQn0D8HJHgCj2ziIZWVcQ8Zzb1tv7sMJc@t3071viq0k1g.aws-sa-east-1-1.psdb.cloud/dg_solutions?ssl={"rejectUnauthorized":true}')
	global.connection = connection;
	return connection;
}

async function selectUsuarios(){
	const user = await connect();
	const rows = user.query('SELECT * FROM usuario');
	return await rows;
}

async function insertUsuarios(usuario){
	const user = await connect();
	const sql = 'INSERT INTO usuario(nome,dataNascimento) VALUES (?,?);';
	const values = [usuario.nome, usuario.dataNascimento];
	return await user.query(sql, values);
}

async function updateUsuarios(id, usuario){
	const user = await connect();
	const sql = 'UPDATE usuario SET nome=?, dataNascimento=? WHERE id=?';
	const values = [usuario.nome, usuario.dataNascimento, id];
	return await user.query(sql, values);
}

async function deleteUsuarios(id){
	const user = await connect();
	const sql = 'Delete FROM usuario WHERE id=?';
	return await user.query(sql, [id]);
}

module.exports = {selectUsuarios, insertUsuarios, updateUsuarios, deleteUsuarios}