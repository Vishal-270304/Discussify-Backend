import jwt from "jsonwebtoken";
import "dotenv/config";
import TokenPayload from "../interfaces/TokenPayload";
import {Response} from "express";

const ONE_DAY = 24*60*60*1000;
const ONE_WEEK = 7*ONE_DAY;

const generateToken = (payload:TokenPayload,rememberMe:boolean,res:Response) : void  => {
    const token =  jwt.sign(payload, process.env.JWT_SECRET || '', { expiresIn: rememberMe ? "7d" : "1d" });
    console.log(token);

    res.status(200).json({token});

    // res.cookie("token",token,{
    //     httpOnly:true,
    //     maxAge:rememberMe ? ONE_WEEK : ONE_DAY,
    //     secure: process.env.NODE_ENV === 'production',
    //     sameSite:"strict",
    //     path:"/"

    // })
}

const verifyToken = (token:string) : TokenPayload | null => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET || '') as TokenPayload;
    } catch (error) {
        return null;
    }
}



export default generateToken;
export {verifyToken};