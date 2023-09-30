

import { education } from "../schema/education.js";
import { User } from "../schema/user.js";

export const addEducation = async(req, res)=>{
    try {
        const{id} =req.params;
        const {userID ,university,universityDtae,college,collegeDtae,school,schoolStream,educationimage,schoolDtae,UniversityStream,collegetream,collegeCgpa,UniversityCgpa,SchoolCgpa} =req.body;

        const Users = await User.findById(id);
        // const smaeEdu =await education.findOne(userID);

        if(!Users){
            res.status(404).json({
                success:false,
                message:"user is not exist"
            })
            return;
        }
        // if(smaeEdu){
        //     res.status(404).json({
        //         success:false,
        //         message:"already add"
        //     })
        //     return;
        // }
        const newEdu= new education({
           userID:id, university,universityDtae,college,collegeDtae,school,schoolStream,educationimage,schoolDtae,UniversityStream,collegetream,collegeCgpa,UniversityCgpa,SchoolCgpa
        })
        await newEdu.save();
        res.status(200).json({
            success:true,
            message:"added successfull "
        })
        
    } catch (error) {
        res.status(404).json({
            success:false,
            error
        })
    }

}

export const updateUducation =async(req, res)=>{
    try {
        const{_id,userID,university,universityDtae,college,collegeDtae,school,schoolStream,educationimage,schoolDtae,UniversityStream,collegetream,collegeCgpa,UniversityCgpa,SchoolCgpa} =req.body;
        const Edu = await education.findById(_id);
        const smaeEdus =await education.findOne({userID});
        if(!Edu){
            res.status(404).json({
                success:false,
                message:"user is not exist"
            })
            return;
        }
        if(!smaeEdus){
            res.status(404).json({
                success:false,
                message:"you can update only your account"
            })
            return;
        }

        await Edu.updateOne({
            university,universityDtae,college,collegeDtae,school,schoolStream,educationimage,schoolDtae,UniversityStream,collegetream,collegeCgpa,UniversityCgpa,SchoolCgpa
        })
        res.status(200).json({
            success:true,
            message:"update successfull ",
           Edu
        })

    } catch (error) {
        res.status(404).json({
            success:false,
            error,
           
        })
        
    }
}