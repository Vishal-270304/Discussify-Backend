import  "dotenv/config"
import express from "express"
import homeRoute from "./routes/homeRoute";
import doubtRoute from "./routes/doubt"
import profileRoute from "./routes/ProfileRoute";
import clientProfileRoute from "./routes/ClientProfileRoute"
import SignUpRoute from "./routes/SignUpRoute"
import VerifyOtp from "./routes/VerifyOtp"
import LoginRoute from "./routes/LoginRoute"
import connectDB from "./config/db";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()       

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
connectDB();

app.use("/",homeRoute)
app.use("/api/doubt",doubtRoute)
app.use("/api/profile",profileRoute)
app.use("/api/client-profile",clientProfileRoute)
app.use("/api/signup",SignUpRoute)
app.use("/api/verify-otp",VerifyOtp)
app.use("/api/login",LoginRoute)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT} `)
})