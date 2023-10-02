const app = require("./app")
const dotenv = require('dotenv')
const connectdatabase = require("./db/db");
//access .env files 
dotenv.config();


//handle errors
process.on("uncaughtException" , (err) => {

    console.log(`error : ${err.message}`)
    console.log(`shutting the server for uncaught error`)
})

//connect database
connectdatabase();

const port = process.env.PORT || 5000 ;
  const server = app.listen(port, ()=>{
    console.log('server is running on http://localhost:' + port );
 })

 process.on('uncaughtRejection', (err) => {
    console.log(`server down for ${err.message}`)
    console.log(`shutting the server for unhandle promise`);
 
 server.close(()=>{
     process.exit(1);
 })
 
  })
 