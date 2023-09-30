import {project} from '../schema/projects.js'

export const addProject = async(req, res)=>{
    try {
        const { tittle,description,team,technology,link,reader,} =req.body;
        const {id} = req.params;
        if(!id){
            res.status(404).json({
                success:false,
            })
            return;
        }
        await project.create({userID:id,
            projectTittle:tittle,projectDesc:description,projectlevel:team,projectTechology:technology,projectlinks:link,projectimage:reader,});
        res.status(200).json({
            success:true,
            project
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            error
        })
        console.log(error)
    }
}


export const updateProject = async(req, res)=>{
    try {
        const {id} = req.params;
        const {_id,projectTittle,projectDesc,projectlevel,projectTechology,projectlinks,projectimage} = req.body;
        const newproject = await project.findById(_id);
        if(!newproject._id){
            res.status(404).json({
                success:false,
                message:"cannot find the same project for update"
            })
            return;
        }
        if(!id){
            res.status(404).json({
                success:false,
                message:"you can only update only ypur projects"
            })
            return;
        }
        await newproject.updateOne({
            projectTittle,projectDesc,projectlevel,projectTechology,projectlinks,projectimage
        });
        res.status(200).json({
            success:true,
            newproject
        })   
    } catch (error) {
        res.status(404).json({
            success:false,
            error
        })
        console.log(error)
    }
}
