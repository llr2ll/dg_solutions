var express = require('express')
var app = express()
var cors = require('cors')

app.use(cors())

(async () => {

    const db = require("./db.js");
    //await db.insertUsuarios({nome: 'Ricardo',dataNascimento: "2000-10-25"})
    //await db.updateUsuarios(5 ,{nome: 'Zeca',dataNascimento: "2002-10-25"})
    //await db.deleteUsuarios(5)
    const data = await db.selectUsuarios(); 
    var users = data[0];
    console.log(users)

    app.get('/', function(req, res) {
        res.json({users});
      });
})();

app.listen(8080)