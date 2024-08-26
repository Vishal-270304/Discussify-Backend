import mongoose,{Document,Schema} from "mongoose";
import SignUp from "../interfaces/SignUP";

interface ISignUp extends Document{
    username:SignUp["username"];
    password:SignUp["password"];
    // :SignUp["rememberMe"]
    email:SignUp["email"];
    gender:SignUp["gender"];
}

const SignUpSchema : Schema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    // rememberMe:{type:Boolean,default:false},
    gender:{type:String}
})

export const SignUpModel = mongoose.model<ISignUp>("SignUps",SignUpSchema);