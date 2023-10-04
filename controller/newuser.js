
import { userInfo } from "../schema/userinfo.js";

import { User } from "../schema/user.js";


export const newuserinfo =async(req, res)=>{
    const {id} = req.params;
    const {tittle,level,link,file} = req.body;
    const user = await User.findById(id);
    if(!user){
        res.status(404).json({
            message:"user not found",
            success:false,
        })
    }
    const userInformation = new userInfo({
        userID:id,userName:user.name, 
    })
    await userInformation.save();
    res.json({user})

}