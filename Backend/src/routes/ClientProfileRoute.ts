import   {Router} from "express"
import clientProfile from "../controllers/ClientProfile";

const router = Router();

router.post("/",clientProfile)

export default router