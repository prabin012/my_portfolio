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
app.use('/api/',userRouter);
app.use(bodyParser.json());





const PORT = process.env.PORT || 5500
app.listen(PORT,() =>{
    console.log("server is running on port",PORT)
})