const express = require('express');
const app = express();

const connectDB = require("./db/connect")

app.get('/',(req,res)=>{
    res.send('Home Page')
})


const port = 3000;

const start = async ()=>{
    try {
        await connectDB()
        app.listen(port,()=> console.log('listening on port 3000'))
    } catch (error) {
        console.log(error)
    }
}

start() 