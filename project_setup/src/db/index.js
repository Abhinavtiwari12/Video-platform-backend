import express from "express"
import { DB_NAME } from "../constanrts.js";
import mongoose from "mongoose";

const connectdb = async () => {
    try {
        const connnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`mongodb connected !! DB HOST: ${connnectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB CONNECTION FAILD", error);
        process.exit(1)
        
    }
}

export default connectdb