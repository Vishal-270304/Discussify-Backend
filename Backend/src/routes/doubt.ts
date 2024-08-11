import   {Router} from "express"
const router = Router()
import PostADoubt from "../controllers/postADoubt"

router.post("/",PostADoubt)

export default router