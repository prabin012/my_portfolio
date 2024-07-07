import { addskills } from "../controller/addskills.js";
import {  getUserbyId, update } from "../controller/createUser.js";
import { addEducation, DeleteEdu, updateUducation } from "../controller/education.js";
import { newuserinfo } from "../controller/newuser.js";
import { addProject, DeleteProject, updateProject } from "../controller/project.js";
import { DeleteSkill, setSkills, updateSkills } from "../controller/skills.js";
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
router.post('/:id/addproject', addProject);
router.delete('/:id/deleteproject', DeleteProject);
router.delete('/:id/deleteedu', DeleteEdu);
router.delete('/:id/deleteskill', DeleteSkill);
router.post('/:id/newuser', newuserinfo);
router.patch('/:id/addskills', addskills);
router.get('/:username', getUserbyId);




export default router;