import 'dotenv/config';
import mongoose from "mongoose";


const MONGO_URI = process.env.MONGO_DB_URI || '';


const connectDB = async () =>{
    try {
        const connection = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected: ${connection.connection.host}`);
        return connection;
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`); 
        process.exit(1);
    }
}

export default connectDB;