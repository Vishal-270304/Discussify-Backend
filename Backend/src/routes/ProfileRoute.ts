import {Router} from 'express';
const router = Router();
import createProfile from '../controllers/Profile';

router.post("/",createProfile);

export default router;