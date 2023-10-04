import mongoose from "mongoose";

const updateSchema =new mongoose.Schema(
    {
        userID:{
            type:String,
        },
        university:{
            type:String,
            default:null
        },
        universityDtae:{
            type:String,
            default:null
        },
        UniversityStream:{
            type:String,
            default:null
        },
        UniversityCgpa:{
            type:String,
                default:null
          },
    //     college:{
    //         type:String,
    //         default:null
    //     },
    //     collegeDtae:{
    //         type:String,
    //         default:null
    //     },
         
    //     collegetream:{
    //         type:String,
    //         default:null
    //     },
    //   collegeCgpa:{
    //     type:String,
    //         default:null
    //   },
    //     school:{
    //         type:String,
    //         default:null,
            
    //     },
    //     schoolDtae:{
    //         type:String,
    //         default:null
    //     },
    //   SchoolCgpa:{
    //     type:String,
    //         default:null
    //   },
    //   schoolStream:{
    //     type:String,
    //     default:null
    //   },
      educationimage:{
        type:String,
        default:null,
    }
  
},
{
    timestamps:true
});

export const education = mongoose.model("education", updateSchema);