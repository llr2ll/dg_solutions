const express = require('express')

async function users(){

    const app = express();
    app.use("/", express.static('../../dist'));
    app.listen(3000,() => {console.log('Sever rodando: http://localhost:3000')});

    const db = require("./db.js");

    //await db.insertUsuarios({nome: 'Ricardo',dataNascimento: "2000-10-25"})
    app.post('/usuarios/insert',(req,res) =>{
      console.log(req.params)
    })

    //await db.updateUsuarios(5 ,{nome: 'Zeca',dataNascimento: "2002-10-25"})
    app.post('/usuarios/insert',(req,res) =>{
      console.log(req.params)
    })
    
    app.delete('/usuarios/:id', (req, res) => {
       db.deleteUsuarios(req.params.id)
    })

    const data = await db.selectUsuarios(); 
    app.get('/usuarios', (req, res) => {
      res.status(200).json(data[0])       
    })

}

users()