

import { education } from "../schema/education.js";
import { User } from "../schema/user.js";

export const addEducation = async(req, res)=>{
    try {
        const{id} =req.params;
        const {university,date,educationimage,branch,result} =req.body;

        const Users = await User.findById(id);
       
        if(!Users){
            res.status(404).json({
                success:false,
                message:"user is not exist"
            })
            return;
        }
       
        const newEdu= new education({
           userID:id, university,universityDtae:date,educationimage,UniversityStream:branch,UniversityCgpa:result,
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
        const {id} = req.params;
        const{university,universityDtae,educationimage,UniversityStream,UniversityCgpa} =req.body;
        const Edu = await education.findOne({userID:id});
        if(!Edu){
            return res.status(404).json({
                success:false,
                message:"user is not exist"
            })
           
        }
       
        await Edu.updateOne({
            university,universityDtae,educationimage,UniversityStream,UniversityCgpa,
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