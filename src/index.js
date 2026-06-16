

// import { MongoClient } from 'mongodb';

// // Replace this with your actual MongoDB Atlas connection string
// const url = "mongodb+srv://ROHIT:Zaqmlp12345678@cluster0.lj9jd6l.mongodb.net/"; 

// const client = new MongoClient(url);

// // Ensure there are no spaces in the database name
// const dbName = "programming_knowledge"; 

// async function main() {
//   try {
//     // Connect to the Atlas cluster
//     await client.connect();
//     console.log("connected to mongo db atlas");
//   } catch (error) {
//     // Log any errors that happen during connection
//     console.error(error);
//   }
// }

// // Call the function to execute the connection
// main();




// require('dotenv').config()

import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env"
});

// console.log("MONGODB_URI =", process.env.MONGODB_URI);

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log.apply(`server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
  console.log("MONGO db conntion failed !!!",err)
})





// import express from "express"
// (async ()=> {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERRR : ",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.error("ERROR: ",error)
//         throw err 
//     }
// })()