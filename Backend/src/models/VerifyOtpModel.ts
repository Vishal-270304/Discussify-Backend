import mongoose,{Document,Schema} from "mongoose";
import VerifyOtp from "../interfaces/VerifyOtp";
import SignUp from "../interfaces/SignUP";

interface IVerifyOtp extends Document{
    username:SignUp["username"];
    password:SignUp["password"];
    email:SignUp["email"];
    gender:SignUp["gender"];
    otp:string;
    rememberMe:boolean;

}

const verifyOtpSchema : Schema  = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    gender:{type:String},
    otp:{type:String,required:true},
    rememberMe:{type:Boolean,default:false}
})

export const verifyOtpModel = mongoose.model<IVerifyOtp>("Otp's",verifyOtpSchema)