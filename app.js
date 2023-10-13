import express from "express";
import { dataBase } from "./db/dbConnect.js";
import userRouter from './routes/route.js'
import cors from 'cors';
import bodyParser from "body-parser";
import multer, { diskStorage } from "multer";
import { User } from "./schema/user.js";
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: function(cb, req, file){
        cb(null, '/public');
    },
    filename: function(cb, req,file){
        cb(null, Date.now()+'_'+ file.originalname)
    }
});

const upload = multer({storage:storage});

app.post('/api/:id/upload', upload.single('image') ,(req, res)=>{
    res.json({ file: req.file });
})

dataBase();



app.use('/api/',userRouter);
app.use(bodyParser.json());





const PORT = process.env.PORT || 5500
app.listen(PORT,() =>{
    console.log("server is running on port",PORT)
})