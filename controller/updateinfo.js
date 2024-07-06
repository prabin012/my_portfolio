import { User } from "../schema/user.js";

export const updateInformation =async(req, res)=>{
    try {
        const{id} = req.params
        const {username,Desc,Location,Birth, about1,about2,Resuma,phoneNumber,Facebook,Instagram,Github,LinkedIn,Youtube,userimage} = req.body;
        const userId =await User.findById(id);
        if(!userId){
            res.status(404).json({
                success:false,
                message:"didnot find the user"
            })
            return;
        }
        await userId.updateOne(
            {   name:username,
                phoneNumber,
                Desc,
                Location,
                Birth,
                about1,
                facebookLink:Facebook,
                InsagramLink:Instagram,
                githubLink:Github,
                linkedinLink:LinkedIn,
                resuma:Resuma,
                Youtube,
                userimage
            }
        )
        res.status(200).json({
            success:true,
            userId
        })
       
    } catch (error) {
        res.status(404).json({
            success:false,
            message:"didnot find the user"
          
        })
        
    }
}