const express=require("express");
const cors=require("cors");

require('./dbconfig');

const app=express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));

const PORT=process.env.PORT||8080;
console.log(PORT)

app.get('/',(req,res)=>{
    res.send("Welcome to the page ")
})

app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`)
})

app.use('/',require('./app'))



