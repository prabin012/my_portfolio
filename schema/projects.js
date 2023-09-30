import mongoose from "mongoose";

const projectsSchema =new mongoose.Schema(
    {
        userID:{
            type:String,
        },
        projectTittle:{
            type:String,
            default:""
        },
        projectDesc:{
            type:String,
            default:""
        },
        projectlevel:{
            type:String,
            default:""
        },
        projectTechology:{
            type:String,
            default:""
        },
        projectlinks:{
            type:String,
            default:""
        },
        projectimage:{
            type:String,
            default:"assests/images/pro.png",
        
        }
  
},
{
    timestamps:true
});

export const project = mongoose.model("project", projectsSchema);