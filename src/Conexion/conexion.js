const mysql=require("mysql")

require("dotenv").config()



  
  
const config={
        connectionLimit : 20,
        host:process.env.HOST,
        user:process.env.USER,
        password:process.env.PASSWORD,
        port:process.env.PUERTO,
        database:process.env.DATA_BASE,
        
        
    }

    const cnx=mysql.createPool(config)



  
        cnx.getConnection((error)=>{
                error?console.log(error):console.log("Conexion a base de datos exitosa!")
        })
  
     
   


 

    




 

module.exports=cnx;