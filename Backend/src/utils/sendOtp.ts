import 'dotenv/config'
import * as nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user:process.env.EMAIL, 
        pass:process.env.PASSWORD
    }
})

export const sendOtp  = async(email:string,otp:string)=>{
   
       await transporter.sendMail({
        from:process.env.EMAIL,
        to:email,
        subject:"OTP for login",
        text:`Your OTP is ${otp}`,
        html:`<b>Your OTP is ${otp}</b>`
    })

}

export const generateOtp = () :string =>{
return Math.floor(100000 + Math.random() *900000).toString()
}