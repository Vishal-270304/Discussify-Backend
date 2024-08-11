import  {Request,Response} from "express"
import ClientProfile from "../interfaces/ClientProfile"
import { clientProfileModel } from "../models/ClientProfileModel"

const clientProfile = async(req:Request<{},{},ClientProfile>,res:Response)=>{
    try {

        const {name,email} = req.body

        const newClientProfile = new clientProfileModel({
            name,
            email
        })

        await newClientProfile.save()

        res.status(200).json({
            message:"Client Added Successfully",
            profile : newClientProfile
        })

    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
}

export default clientProfile