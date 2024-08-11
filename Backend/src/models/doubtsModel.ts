import mongoose,{Document} from "mongoose";
import Doubts from "../interfaces/Doubts";

interface IDoubt extends Document{
    title:Doubts["title"];
    desc:Doubts["desc"];
    doubtCategory:Doubts["doubtCategory"];
    doubtSubCategory:Doubts["doubtSubCategory"];
    doubtDate:Doubts["doubtDate"]; 
}

const DoubtSchema = new mongoose.Schema<IDoubt>({
    title:{type:String,required:true},
    desc:{type:String,required:true},
    doubtCategory:{type:String,required:true},
    doubtSubCategory:{type:String,required:true},
    doubtDate:{type:Date,required:true},
})

export const doubtModel = mongoose.model<IDoubt>("doubtModel",DoubtSchema);
