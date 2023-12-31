import { addskills } from "../controller/addskills.js";
import {  getUserbyId, update } from "../controller/createUser.js";
import { addEducation, updateUducation } from "../controller/education.js";
import { newuserinfo } from "../controller/newuser.js";
import { addProject, updateProject } from "../controller/project.js";
import { setSkills, updateSkills } from "../controller/skills.js";
import { updateInformation } from "../controller/updateinfo.js";
import { Login, newUser } from "../controller/users.js";

import express from "express";

const router = express.Router();

router.post('/createUser', newUser);
router.post('/login', Login);
router.get('/:id/getuser', update);
router.post('/update/:id', updateInformation);
router.post('/education/:id', addEducation);
router.post('/updateuducation/:id', updateUducation);
router.post('/:id/skills', setSkills);
router.post('/:id/updateskills', updateSkills);
router.post('/:id/addproject', addProject);
router.post('/:id/updateproject', updateProject);
router.post('/:id/newuser', newuserinfo);
router.patch('/:id/addskills', addskills);
router.get('/:username', getUserbyId);




export default router;