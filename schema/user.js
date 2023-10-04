import mongoose from "mongoose";

const userSchema =new mongoose.Schema(
    {
    name:{
        type:String,
        required:true,

    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
   
    Desc:{
        type:String,
        default:""
    },
    Location:{
        type:String,
        default:""
    },
    Birth:{
        type:Date,
        default:""
    },
    about1:{
        type:String,
        min:20,
        max:100,
        default:""
    },
    about2:{
        type:String,
        min:20,
        max:100,
        default:""
    },
   
    facebookLink:{
        type:String,
        default:""
    },
    InsagramLink:{
        type:String,
        default:""
    },
    githubLink:{
        type:String,
        default:""
    },
    linkedinLink:{
        type:String,
        default:""
    },
    Youtube:{
        type:String,
        default:""
    },
    resuma:{
        type:String,
        default:""
    },
    userimage:{
        type:String,
        default:null,
    }
},
{
    timestamps:true
});

export const User = mongoose.model("User", userSchema);