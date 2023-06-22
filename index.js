import  express  from "express";
import bodyParser from "body-parser";
import userRoutes from './routes/users.js';
import mongoose from "mongoose";
import env from "dotenv";
// const express = require('express')
// const mongoose = require('mongoose');
env.config();

mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true });

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


const app=express();

const port=9000; 
app.use(bodyParser.json());

app.use('/users',userRoutes);
app.listen(port ,()=>{
    console.log(`cool server running in port http://localhost:${port}`)
});



app.get('/' ,(req,response)=>{
console.log('TESTTT');
response.send("HELLO HOME PAGE");
})