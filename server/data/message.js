import mongoose from 'mongoose';

const message=mongoose.Schema(
    {
        message:String,
        name:String,
        timestamp:String,
        side:Boolean,
    }
);


export default mongoose.model("messageContainer",message);