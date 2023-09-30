import mongoose from "mongoose";

const featuresSchema =new mongoose.Schema(
    {
        featureGreet:{
            type:String,
            default:""
        },
        featureDesc:{
            type:String,
            default:""
        },
        featureJoin:{
            type:String,
            default:""
        },
        projectimage:{
            type:String,
            default:"",
        
        }
},
{
    timestamps:true
});

export const feature = mongoose.model("feature", featuresSchema);
