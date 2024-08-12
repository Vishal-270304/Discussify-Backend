interface Message{
    roomId: number;
    content: string;
    senderId: string;
    timestamp: Date;
}

export default Message;