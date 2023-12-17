const jwt = require("jsonwebtoken")
const cnx = require('../Conexion/conexion.js')
require('dotenv').config()


const login = (req, res) => {

    try {

        var values = req.body
        //values=JSON.parse(values)
        console.log(values)
        let user = values.user
        let password = values.password
        

         
                cnx.query(process.env.SELECT_USER + `'${user}' and password='${password}'`, async(error, result) => {

                    if (error) {
                        console.log(error)
                    } else {

                        if (result[0] !== undefined) {
                            var users = result
                            const user = { users: users }
                            const accessToken = generateAccessToken(user)
                            
                            return await res.header('authorization', accessToken).json({
                                message: 'Usuario autenticado',
                                token: accessToken
                            })
                        } else if (result[0] === undefined) {
                           
                            return await res.json({ "data": "Login Incorrecto" })
                        }






                    }

                   

                })

                
            




        
      
    } catch (error) {
        return res.sendStatus(500).json({ message: error.message })
    }

}



function generateAccessToken(user) {


    return jwt.sign(user, process.env.SECRET, { expiresIn: '24h' })

}


function validateToken(req, res, next) {
    const accessToken = req.headers['authorization'];
    if (!accessToken) res.send('acces denied');
    jwt.verify(accessToken, process.env.SECRET, (error, user) => {
        if (error) {
            res.send('Access denied, token expired or incorrect')
        } else {
            next()
        }
    })
}


module.exports = { login, validateToken }