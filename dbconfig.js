const mongoose=require("mongoose");//importing mongoose
require('dotenv').config()//importing dotenv

//connecting with mongodb 
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDb Connected")) //if connected console
.catch((err)=>console.log(err))//if error 

//we use .then insted of try because there is only one statement 

module.exports=mongoose; //exporting mongoose 
