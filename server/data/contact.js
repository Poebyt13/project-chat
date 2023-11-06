import mongoose  from "mongoose";

const contact=mongoose.Schema(
    {
        myUsername:String,
        contact_name:String
    }
);

export default mongoose.model("contactContainer",contact);