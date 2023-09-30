import mongoose from "mongoose";

const copyRightsSchema =new mongoose.Schema(
    {
        copyrightTittle:{
            type:String,
            default:""
        },
        copyRightDesc:{
            type:String,
            default:""
        },
        copyRight:{
            type:String,
            default:""
        },
      
},
{
    timestamps:true
});

export const copyRight = mongoose.model("copyRight", copyRightsSchema);
