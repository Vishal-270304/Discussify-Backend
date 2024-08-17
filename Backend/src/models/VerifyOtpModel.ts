import mongoose,{Document,Schema} from "mongoose";
import VerifyOtp from "../interfaces/VerifyOtp";

interface IVerifyOtp extends Document{
    enteredOtp:VerifyOtp["enteredOtp"]
    email:VerifyOtp["email"]
}

const verifyOtpSchema : Schema  = new mongoose.Schema({
    enteredOtp:{type:String,required:true},
    email:{type:String,required:true}
})

export const verifyOtpModel = mongoose.model<IVerifyOtp>("Otp's",verifyOtpSchema)