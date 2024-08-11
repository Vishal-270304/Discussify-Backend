import {Request,Response} from "express";
import SignUp from "../interfaces/SignUP";
import {SignUpModel} from "../models/SignUpModel";
import hashedData from "../utils/hashing";
import generateToken from "../utils/token";
import {sendOtp,generateOtp} from "../utils/sendOtp";

const SignUp = async(req:Request<{},{},SignUp>,res:Response)  =>{

try {
    
const {username,password,email,rememberMe,gender} = req.body;

const hashedPassword = await hashedData(password)

const otp = generateOtp();
console.log(otp);
await sendOtp(email,otp);

const newSignUp = new SignUpModel({
    username,
    password:hashedPassword,
    email,
    rememberMe,
    gender
})

await newSignUp.save();

const token = generateToken({
    username:newSignUp.username,
},res)

res.status(201).json({
    message:"User Registered Successfully",
    user:{
        username:newSignUp.username,
        email:newSignUp.email,
        rememberMe:newSignUp.rememberMe,
        gender:newSignUp.gender
    },
    token:token
})

} catch (error) {
    res.status(500).json({
        message:"Internal Server Error",
        error:error
    })
}

}

export default SignUp;