import {Router} from "express"
const router = Router();
import SignUp from "../controllers/SignUp";

router.post("/",SignUp)

export default router;