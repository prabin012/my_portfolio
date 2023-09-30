import { education } from "../schema/education.js";
import { skill } from "../schema/skills.js";
import { User } from "../schema/user.js"
import {project} from '../schema/projects.js'



export const update =async(req, res)=>{
try {
    const{id} = req.params;
    
    const users = await User.findById(id);
    const educations = await education.find({userID:id});
    const skills = await skill.find({userID:id});
    const projectss = await project.find({userID:id})
    if(!users){
        res.status(404).json({
            sucess:false,
            message:"user doesnot match !!"
        })
        return;
    }
    // if(!educations){
    //     res.status(404).json({
    //         sucess:false,
    //         message:"user education doesnot match"
    //     })
    //     return;
    // }
    // if(!skills){
    //     res.status(404).json({
    //         sucess:false,
    //         message:"user isSkills doesnot match"
    //     })
    //     return;
    // }
res.status(200).json({users,educations,skills,projectss});
} catch (error) {
    res.status(404).json({
        sucess:false,
        error,
    })
    console.log(error);
}
}
