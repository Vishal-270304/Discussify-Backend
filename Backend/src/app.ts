import  "dotenv/config"
import express from "express"
import homeRoute from "./routes/homeRoute";
import doubtRoute from "./routes/doubt"
import profileRoute from "./routes/ProfileRoute";
import clientProfileRoute from "./routes/ClientProfileRoute"
import SignUpRoute from "./routes/SignUpRoute"
import LoginRoute from "./routes/LoginRoute"
import connectDB from "./config/db";


const app = express()       


app.use(express.json())
connectDB();

app.use("/",homeRoute)
app.use("/api/doubt",doubtRoute)
app.use("/api/profile",profileRoute)
app.use("/api/client-profile",clientProfileRoute)
app.use("/api/signup",SignUpRoute)
app.use("/api/login",LoginRoute)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT} `)
})