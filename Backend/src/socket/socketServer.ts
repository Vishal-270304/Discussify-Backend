import {Server as HttpServer} from 'http';
import {Server as SocketIOServer,Socket} from 'socket.io';
import SOCKET_EVENTS from './socketEvents';
import * as chatController from '../controllers/Chat';

const initializeSocketServer=(httpServer:HttpServer)=>{

const io = new SocketIOServer(httpServer,{
    cors:{
        origin:process.env.FRONTEND_URL || 'http://localhost:3000',
        methods:['GET','POST'],
    }
})

io.on(SOCKET_EVENTS.CONNECTION, (socket:Socket) => {
    console.log('New user connected');

    
    socket.on(SOCKET_EVENTS.JOIN_ROOM,chatController.handleJoinRoom(socket));
    
    socket.on(SOCKET_EVENTS.LEAVE_ROOM,chatController.handleLeaveRoom(socket));
    
    socket.on(SOCKET_EVENTS.SEND_MESSAGE,chatController.handleSendMessage(socket));

    socket.on(SOCKET_EVENTS.DISCONNECT,()=>{
        console.log('User disconnected');
    })

})

}

export default initializeSocketServer;
