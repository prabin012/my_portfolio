import express from "express";
import { dataBase } from "./db/dbConnect.js";
import userRouter from './routes/route.js'
import cors from 'cors';
import bodyParser from "body-parser";
import multer from "multer";
import { User } from "./schema/user.js";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

dataBase();


app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(bodyParser.json());



const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, '../frontend/public/assests/images')
    },
    filename:(req, file, cb)=>{
        cb(null,  Date.now() + file.originalname)
    }
})

const upload = multer({
    storage:storage
})

app.post('/:id/upload', upload.single('image'), async(req, res)=>{
    const imageName = req.file.filename;
    try {
        await User.updateOne({userimage:imageName});
        res.status(200).json("uploaded sucessfully.................")
    } catch (error) {
        console.log(error)
    }
})


const PORT = process.env.PORT;
app.listen(PORT,() =>{
    console.log("server is running on port",PORT)
})