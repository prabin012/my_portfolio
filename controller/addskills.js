import { skill } from "../schema/skills.js";
import { User } from "../schema/user.js";
import { userInfo } from "../schema/userinfo.js";


export const addskills = async(req, res)=>{

    const {tittle,level,rating, _id} = req.body;
    const {id} = req.params;
    const isUser = await userInfo.findOne({userID:id});
   const users = await userInfo.findById(_id);
    if(!isUser){
        res.status(404).json({
            success:false,
            message:"error",
        })
        return;
    }
  
    console.log(users)
    await users.push({
        skills:[{ skillsTittle:tittle,skilllevel:level,skillrating:rating}]

    })
   
    res.status(200).json({
        success:true,
        message:"updated",
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