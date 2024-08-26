import {NextFunction,Request,Response} from "express";
import "dotenv/config";
import {verifyToken} from "../utils/token";

const checkAuthToken = (req:Request,res:Response,next:NextFunction) =>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }

    const payload = verifyToken(token);

    if (!payload) {
        return res.status(401).json({ message: "Invalid Token" });
    }

    // req.user = payload;

    next();
}

export default checkAuthToken;