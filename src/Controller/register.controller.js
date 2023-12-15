const cnx = require('../Conexion/conexion.js')



const registerUser=(req,res)=>{
   try {
    var values= req.body
    //values=JSON.parse(values)
     console.log(values)
        user=values.email
        password=values.password

        cnx.query(process.env.INSERT_USER+`'${user}','${password}',null);`,(error)=>{
                 if(error){
                    console.log(error)
                 }else{
                    return res.json({"data":"Registrado correctamente"})
                 }
        })

   } catch (error) {
    return res.sendStatus(500).json({message:error.message})
   }
}


module.exports={registerUser}