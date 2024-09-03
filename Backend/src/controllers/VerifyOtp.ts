import {Request,Response} from "express"
import VerifyOtp from "../interfaces/VerifyOtp"
import { verifyOtpModel } from "../models/VerifyOtpModel"
import { SignUpModel } from "../models/SignUpModel"
import generateToken from "../utils/token"

const VerifyOtpController = async (req:Request<{},{},VerifyOtp>,res:Response) =>{    

     try {    

         const {enteredOtp,email} = req.body



        const otpSent = await verifyOtpModel.findOne({email})



        // if(verifyOtp === otp){
        //     res.status(200).json("Otp Verified Successfully")
        // }

        if(otpSent && otpSent.otp === enteredOtp){

            const { username, password, email, gender, rememberMe } = otpSent;
            const newUser = new SignUpModel({
                username,
                password,
                email,
                gender
            });

            try {
                await newUser.save();
                await verifyOtpModel.findOneAndDelete({ email });
                generateToken({username,email},rememberMe,res)
                res.status(201).json({
                    message: "User registered successfully"
                });
            } catch (error) {
                res.status(500).json({
                    message: "Failed to register user",
                    error: error
                });
            }
        }else{
            res.status(400).json("Invalid Otp")
        }

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error
        });
        console.log(error)
    }

}

export default VerifyOtpController;