import mongoose from "mongoose";

export const dataBase = ()=>{
    const db_url = process.env.MONGODB_URL;
    mongoose.connect(db_url
    ).then(()=>{
        console.log("db Connected");
    }).catch((e)=>{
        console.log(e)
    })
}