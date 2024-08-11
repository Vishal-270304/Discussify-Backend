import mongoose,{Document} from "mongoose";
import ClientProfile from "../interfaces/ClientProfile";

interface IClientProfile extends Document{
    name:ClientProfile["name"];
    email:ClientProfile["email"];
}

const clientProfileSchema = new mongoose.Schema<IClientProfile>({
    name:{type:"string",require:true},
    email:{type:"string",require:true},
})

export const clientProfileModel = mongoose.model<IClientProfile>("clientProfileModel",clientProfileSchema)