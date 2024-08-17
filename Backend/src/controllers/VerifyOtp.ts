import {Request,Response} from "express"
import VerifyOtp from "../interfaces/VerifyOtp"
import { verifyOtpModel } from "../models/VerifyOtpModel"

 const VerifyOtpController = async (req:Request<{},{},VerifyOtp>,res:Response) =>{    

     try {    

         const {enteredOtp,email} = req.body

        const otpSent = await verifyOtpModel.findOne({email})

        // if(verifyOtp === otp){
        //     res.status(200).json("Otp Verified Successfully")
        // }

        if(otpSent && otpSent.enteredOtp === enteredOtp){
            res.status(200).json("Otp Verifed Successfully")
        }else{
            res.status(400).json("Invalid Otp")
        }

    } catch (error) {
        res.status(500).json("Internal Server Error")
        console.log(error)
    }

}

export default VerifyOtpController;