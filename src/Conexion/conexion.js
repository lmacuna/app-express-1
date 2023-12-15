const mysql=require("mysql")

require("dotenv").config()



  
   
    const cnx=mysql.createConnection({
    connectionLimit : 20,
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    port:process.env.PUERTO,
    database:process.env.DATA_BASE,
    
    
})



cnx.connect((error)=>{
   if(error){

    throw error.code
    
}else{

   
    console.log("Conectado a Base de Datos correctamente!")
}
})

/* cnx.on('error', function(err) {
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
        cnx.destroy()                // lost due to either server restart, or a
    }else{
        throw err;
    }
});
 */

module.exports=cnx;