import mongoose, {connect} from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectDB = async() =>{
    try{
        const conn= await mongoose.connect(process.env.DB);
        console.log("mongodb connected ")
    }catch(error){
        console.log("mongodb connection failed", error);
        process.exit(1);    
    }
}
export default connectDB;


        // const conn= await mongoose.connect("mongodb://localhost:27017/Data