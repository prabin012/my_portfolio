import mongoose from "mongoose";

const updateSchema =new mongoose.Schema(
    {
        userID:{
            type:String,
        },
        university:{
            type:String,
            default:"abc University"
        },
        universityDtae:{
            type:String,
            default:"start-end year"
        },
        UniversityStream:{
            type:String,
            default:"Branch"
        },
        UniversityCgpa:{
            type:String,
                default:"result"
          },
        college:{
            type:String,
            default:"abc College"
        },
        collegeDtae:{
            type:String,
            default:"start-end year"
        },
         
        collegetream:{
            type:String,
            default:"Stream"
        },
      collegeCgpa:{
        type:String,
            default:"result"
      },
        school:{
            type:String,
            default:"abc School",
            
        },
        schoolDtae:{
            type:String,
            default:"passing year"
        },
      SchoolCgpa:{
        type:String,
            default:"result"
      },
      schoolStream:{
        type:String,
        default:"stream"
      },
      educationimage:{
        type:String,
        default:"assests/images/b5.jpg",
    
    }
  
},
{
    timestamps:true
});

export const education = mongoose.model("education", updateSchema);