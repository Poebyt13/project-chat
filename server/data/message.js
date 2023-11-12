import mongoose from 'mongoose';

const message=mongoose.Schema(
    {
        message:String,
        myUsername:String,
        myFriendName:String,
        timestamp:String,
        by:String,
    }
);


export default mongoose.model("messageContainer",message);