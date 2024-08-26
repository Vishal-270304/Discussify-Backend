import {Request,Response} from "express";
import SignUp from "../interfaces/SignUP";
import {SignUpModel} from "../models/SignUpModel";
import hashedData from "../utils/hashing";
import { verifyOtpModel } from "../models/VerifyOtpModel";
import {sendOtp,generateOtp} from "../utils/sendOtp";



const SignUp = async(req:Request<{},{},SignUp>,res:Response)  =>{
    
    try {
        
        const {username,password,email,rememberMe,gender} = req.body;
        
        const hashedPassword = await hashedData(password)

        // If user present 
        const user = await SignUpModel.findOne({email})
        if(user){
            return res.status(400).json({
                message:"User Already Present"
            })
        }

        const otp = generateOtp();
        console.log(otp);

        

        try {
            await sendOtp(email,otp);
            const existingOtp = await verifyOtpModel.findOne({ email });
            if (existingOtp) {
                existingOtp.username = username;
                existingOtp.password = hashedPassword;
                existingOtp.gender = gender;
                existingOtp.otp = otp;
                existingOtp.rememberMe = rememberMe;
                await existingOtp.save();
            } else {
                const newOtp = new verifyOtpModel({
                    username,
                    password: hashedPassword,
                    email,
                    gender,
                    otp,
                    rememberMe
                });
                await newOtp.save();
            }
        } catch (error) {
            res.status(500).json({
                message:"Failed to sent Otp",
                error:error
            })
        }

        res.status(201).json({
                message:"Otp sent Successfully"
            })

} catch (error) {
    res.status(500).json({
        message:"Internal Server Error",
        error:error
    })
}

}

export default SignUp;