const express = require('express')
const pool = require('./connection')


async function users(){

  const app = express();
  app.use("/", express.static('../../dist'));
  app.listen(3000, () => console.log('Express escutando chamadas na porta ' + 3000));

    const db = require("./db.js");
    //await db.insertUsuarios({nome: 'Ricardo',dataNascimento: "2000-10-25"})
    //await db.updateUsuarios(5 ,{nome: 'Zeca',dataNascimento: "2002-10-25"})
    //await db.deleteUsuarios(5)
    const data = await db.selectUsuarios(); 
   
    console.log(data[0])
    app.get('/usuarios', (req, res) => {
      res.status(200).json(data[0])       
    })

}

users()


/*
// lista os usuarios
app.get('/usuarios', (req, res) => {
	pool.query('SELECT * FROM usuario')
  .then((result) => { res.status(200).json(result[0]) } )
})
*/