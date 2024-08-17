import {Router} from "express"
import VerifyOtpController from "../controllers/VerifyOtp"

const router = Router()

router.post("/",VerifyOtpController)

export default router