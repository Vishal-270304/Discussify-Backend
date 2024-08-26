import   {Router} from "express"
const router = Router()
import PostADoubt from "../controllers/postADoubt"
import checkAuthToken from "../middlewares/checkAuthToken"

router.post("/",checkAuthToken, PostADoubt)

export default router