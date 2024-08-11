import {Request,Response} from 'express';
import Profile from '../interfaces/Profile';
import {profileModel} from '../models/ProfileModel';

const createProfile = async(req:Request<{},{},Profile>,res:Response)=>{
    try {
        const {name,pricePerDay,pricePerMonth,pricePerDoubt,skills} = req.body;
       
        const newProfile = new profileModel({
            name,
            pricePerDay,
            pricePerMonth,
            pricePerDoubt,
            skills
        })

        await newProfile.save();

        res.status(201).json({
            message:"Profile created successfully",
            profile:newProfile
        })
        
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}

export default createProfile;