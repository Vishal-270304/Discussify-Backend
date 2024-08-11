import {Router} from "express";
import Login from "../controllers/Login";

const router = Router();

router.post("/",Login);

export default router;