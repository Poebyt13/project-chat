import mongoose  from "mongoose";

const contact=mongoose.Schema(
    {
        user:String,
        contact_name:String
    }
);

export default mongoose.model("contactContainer",contact);