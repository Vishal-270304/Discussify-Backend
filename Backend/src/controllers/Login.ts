import {Request,Response} from "express";
import { SignUpModel } from "../models/SignUpModel";
import bcrypt from "bcrypt";
import generateToken from "../utils/token";

const Login = async(req:Request,res:Response) =>{
    try {
        
        const {username,password} = req.body;
        
        const user = await SignUpModel.findOne({username});
        // console.log(user)  // Gives the complete user information
        
        if(!user){
            return res.status(400).json({message:"User not found"});
        }

        const isPasswordValid = await bcrypt.compare(password,user.password);

        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid password"});
        }

        const token = generateToken({
            username:user.username
        },res);

        res.status(200).json({message:"Login successful",token});

    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}

export default Login;