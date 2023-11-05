import mongoose  from "mongoose";

const modelProva=mongoose.Schema(
    {
        campo:String
    }
);

export default mongoose.model("provaContainer",modelProva);