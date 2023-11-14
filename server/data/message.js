import mongoose from 'mongoose';

const message=mongoose.Schema(
    {
        message:String,
        myUsername:String,
        contact_name:String,
        timestamp:String,
        side:Boolean,
    }
);


export default mongoose.model("messageContainer",message);