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
// app.use(cors());
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());

dataBase();



app.use('/api/',userRouter);
app.use(bodyParser.json());




const storage = multer.diskStorage({
    destination: function(cb, req, file){
        cb(null, '/public/');
    },
    filename: function(cb, req,file){
        cb(null, req.body.name)
    }
});

const upload = multer({storage:storage});

app.post('/api/:id/upload', upload.single('image') ,(req, res)=>{
    res.json({ file: req.file });
    console.log("success")
})


const PORT = process.env.PORT || 5500
app.listen(PORT,() =>{
    console.log("server is running on port",PORT)
})