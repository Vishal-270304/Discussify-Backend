import {Request,Response} from "express";
import { SignUpModel } from "../models/SignUpModel";
import bcrypt from "bcrypt";
import generateToken from "../utils/token";
import Login from "../interfaces/Login";

const Login = async(req:Request<{},{},Login>,res:Response) =>{
    try {
        
        const {username,password, rememberMe} = req.body;
        console.log(username,password, rememberMe) ;
        
        const user = await SignUpModel.findOne({username});
        console.log(user)  // Gives the complete user information
        
        if(!user){
            return res.status(400).json({message:"User not found"});
        }

        const isPasswordValid = await bcrypt.compare(password,user.password);

        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid password"});
        }

        generateToken({
            username:user.username,
            email:user.email
        },rememberMe,res);

        res.status(200).json({message:"Login successful"});

    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}

export default Login;