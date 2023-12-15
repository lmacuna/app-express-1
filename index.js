
const app=require('./src/App/app.js')



app.set('port',process.env.PORT || 4000)
app.use(require('./src/Router/Routes.js'))

app.listen(app.get('port'),(error)=>{

    error?console.log(error):console.log(`Server run on port ${app.get('port')}`)
})