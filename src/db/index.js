async function users(){

    const db = require("./db.js");
    //await db.insertUsuarios({nome: 'Ricardo',dataNascimento: "2000-10-25"})
    //await db.updateUsuarios(5 ,{nome: 'Zeca',dataNascimento: "2002-10-25"})
    //await db.deleteUsuarios(5)
    const data = await db.selectUsuarios(); 
    var u = data[0];
    console.log(u)
};

users()