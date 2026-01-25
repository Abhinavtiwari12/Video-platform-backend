import dotenv from 'dotenv'

// require('dotenv').config({path: './env'})

import connectdb from "./db/index.js";
import mongoose from 'mongoose';
import { app } from './app.js';

dotenv.config({
    path: '.env'
})



connectdb()
.then(()=> {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running on port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongoodb connection faild !!!", err)
})


















// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("errror", (error) =>{
//             console.log("ERRR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.error("ERROE: ". error)
//         throw err 
//     }
// } )