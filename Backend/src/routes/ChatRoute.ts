import {Router} from 'express';
import * as chatController from '../controllers/Chat';

const router = Router();

router.post('/join/:roomId', chatController.joinRoom);

// Route for leaving a chat room
router.post('/leave/:roomId', chatController.leaveRoom);

// Route for sending a message
router.post('/send/:roomId', chatController.sendMessage);

export default router;