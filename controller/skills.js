import { skill } from "../schema/skills.js";
import { User } from "../schema/user.js";


export const setSkills = async(req, res)=>{

    const {tittle,level,link,file} = req.body;
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
        userID:id, skillsTittle:tittle,skilllevel:level,skilllinks:link,skillimage:file
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