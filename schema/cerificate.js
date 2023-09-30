import mongoose from "mongoose";

const certificatesSchema =new mongoose.Schema(
    {
        certificateimage:{
            type:String,
            default:"",
        
        }
  
},
{
    timestamps:true
});

export const certificate = mongoose.model("certificate", certificatesSchema);