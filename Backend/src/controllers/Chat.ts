import {Socket} from 'socket.io';
import SOCKET_EVENTS from '../socket/socketEvents';
import {MessageModel} from '../models/MessageModel';
import {Request, Response} from 'express';


export const handleJoinRoom = (socket:Socket) => (roomId:string)=>{
    socket.join(roomId);
    console.log(`User ${socket.id} joined room ${roomId}`);
}

export const handleLeaveRoom = (socket:Socket) => (roomId:string)=>{
    socket.leave(roomId);
    console.log(`User ${socket.id} left room ${roomId}`);
}

export const handleSendMessage = (socket: Socket) => async (roomId: string, content: string) => {
    try {
      const newMessage = new MessageModel({
        roomId,
        senderId: socket.id, 
        content
      });
      await newMessage.save();
  
      // Emit the message to all clients in the room
      socket.to(roomId).emit(SOCKET_EVENTS.SEND_MESSAGE, {
        userId: socket.id,
        message: content,
        timestamp: newMessage.timestamp
      });
  
      console.log(`Message sent to room ${roomId}: ${content}`);
    } catch (error) {
      console.error('Error saving message:', error);
    }
  };

export const joinRoom = (req: Request, res: Response) => {
    const { roomId } = req.params;
    const { userId } = req.body; // Assuming you send a userId in the request body
    // Implement logic to join room (this might involve database operations)
    console.log(`User ${userId} joined room ${roomId}`);
    res.status(200).json({ message: `Joined room ${roomId}` });
};

export const leaveRoom = (req: Request, res: Response) => {
    const { roomId } = req.params;
    const { userId } = req.body; // Assuming you send a userId in the request body
    // Implement logic to leave room (this might involve database operations)
    console.log(`User ${userId} left room ${roomId}`);
    res.status(200).json({ message: `Left room ${roomId}` });
};

export const sendMessage = (req: Request, res: Response) => {
    const { roomId } = req.params;
    const { userId, message } = req.body;
    // Implement logic to send message (this might involve database operations and/or emitting a socket event)
    console.log(`Message sent to room ${roomId} by user ${userId}: ${message}`);
    res.status(200).json({ message: 'Message sent' });
};