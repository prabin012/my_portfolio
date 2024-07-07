import { skill } from "../schema/skills.js";
import { User } from "../schema/user.js";

export const setSkills = async(req, res)=>{

    const {tittle,level,rating} = req.body;
    const {id} = req.params;
    const isUser = await User.findById(id);
    if(!isUser){
        res.status(404).json({
            success:false,
            message:"not found user"
        })
        return ;
    }
    const newSkills = new skill({
        userID:id,  userName:isUser.name, skillsTittle:tittle,skilllevel:level,rating:rating
    })
    await newSkills.save();
    res.status(200).json({
        seccess:true,
        isUser
    })
}

export const updateSkills =async(req, res)=>{
    const {_id,tittle,level,link,file} = req.body;
    const{id} =req.params;
    const isSkills = await skill.findById(_id);
    const isUser = await skill.findOne({userID:id})

    if(!isSkills){
        res.status(404).json({
            success:false,
            message:"not found Skills"
        })
        return ;
    }

    if(!isUser){
        res.status(404).json({
            success:false,
            message:"not found user"
        })
        return ;
    }
    await isSkills.updateOne({
        skillsTittle:tittle,skilllevel:level,skilllinks:link,skillimage:file
    })
    res.status(200).json({
        success:true,
        message:"updated",
        isSkills
    })
}


export const DeleteSkill = async(req, res)=>{
    const {id} = req.params;
    const DeletPro = await skill.findById(id);
    try {
        await DeletPro.deleteOne()
        res.status(201).json({
            message:"Deleted Sucessfully...",
            success:true
        })
    } catch (error) {
        res.status(401).json({
            message:"something broken",error,
            success:false
            
        })
    }
   
}