import mongoose,{Document} from 'mongoose';
import Profile from '../interfaces/Profile';

interface IProfile extends Document{
    name:Profile['name'];
    pricePerDay:Profile['pricePerDay'];
    pricePerMonth:Profile['pricePerMonth'];
    pricePerDoubt:Profile['pricePerDoubt'];
    skills:Profile['skills'];
}

const ProfileSchema = new mongoose.Schema<IProfile>({
    name:{type:String,required:true},
    pricePerDay:{type:Number,required:true},
    pricePerMonth:{type:Number,required:true},
    pricePerDoubt:{type:Number,required:true},
    skills:{type:[String],required:true},
})

export const profileModel = mongoose.model<IProfile>("profileModel",ProfileSchema);

