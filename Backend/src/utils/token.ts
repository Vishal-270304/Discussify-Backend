import jwt from "jsonwebtoken";
import "dotenv/config";
import TokenPayload from "../interfaces/TokenPayload";
import {Response} from "express";

const generateToken = (payload:TokenPayload,res:Response) : void  => {
    const token =  jwt.sign(payload, process.env.JWT_SECRET || '', { expiresIn: "7d" });

    res.cookie("token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV === "development",
        maxAge:7*24*60*60*1000,
        sameSite:"strict",

    })


}


export default generateToken;