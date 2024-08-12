import mongoose, { Document, Schema } from 'mongoose';

interface IMessage extends Document {
  roomId: string;
  senderId: string;
  content: string;
  timestamp: Date;
}

// Define the schema for the Message model
const MessageSchema: Schema = new Schema({
  roomId: { 
    type: String, 
    required: true,
  },
  senderId: { 
    type: String, 
    required: true,

  },
  content: { 
    type: String, 
    required: true 
  },
  timestamp: { 
    type: Date, 
    default: Date.now 
  }
});


export  const MessageModel = mongoose.model<IMessage>('Message', MessageSchema);

