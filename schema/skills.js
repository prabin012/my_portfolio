import mongoose from "mongoose";

const skillsSchema =new mongoose.Schema(
    {
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
        skilllinks:{
            type:String,
            default:""
        },
        skillimage:{
            type:String,
            default:"assests/images/r1.png",
        
        }
  
},
{
    timestamps:true
});

export const skill = mongoose.model("skill", skillsSchema);