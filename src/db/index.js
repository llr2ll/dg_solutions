(async () =>{

    const db = require("./db.js");
    //await db.insertUsuarios({nome: 'Ricardo',dataNascimento: "2000-10-25"})
    //await db.updateUsuarios(5 ,{nome: 'Zeca',dataNascimento: "2002-10-25"})
    //await db.deleteUsuarios(5)
    const clients = await db.selectUsuarios();
    console.log(clients)
})();