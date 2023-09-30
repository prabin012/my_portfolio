import {  update } from "../controller/createUser.js";
import { addEducation, updateUducation } from "../controller/education.js";
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




export default router;