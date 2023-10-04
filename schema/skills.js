import mongoose from "mongoose";

const skillsSchema =new mongoose.Schema(
    {
        userName:{
            type:String
        },
        userID:{
            type:String,

        },
        
        skillsTittle:{
            type:String,
            default:""
        },
        skilllevel:{
            type:String,
            default:""
        },
        rating:{
            type:String,
            default:""
        },
      
  
},
{
    timestamps:true
});

export const skill = mongoose.model("skill", skillsSchema);