import express  from "express"
const router = express.Router()
import { home } from "../controllers/home"

router.get("/",home)

export default router