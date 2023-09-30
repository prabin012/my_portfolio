
import { User } from '../schema/user.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// creating user
export const newUser = async (req, res) => {
    const { name, email, password, phoneNumber } = req.body;
    try {
        const isEmail = await User.findOne({ email });
        if (isEmail) {
            res.status(404).json({
                success: false,
                messsage: "USer is already created"
            })
            console.log("user already exits")
        }
        else {
            const salt= await bcrypt.genSalt(10);
            const userPassword = await bcrypt.hash(password, salt)
            User.create({
                name,
                email,
                password:userPassword,
                phoneNumber,
            });
            res.json({
                success: true,
                messsage: "User is created"
            })
        }
    } catch (error) {
        console.log(error)
    }
}


// Login 
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
    
        const users = await User.findOne({email:email});  //find user email into database
        if(!users.email){
            res.status(404).json({
                success: false,
                messsage: "User doesnot exit"
            });
            return;
        }
        const isPassword =await bcrypt.compare(password, users.password);
        if (!isPassword) { 
            res.status(404).json({
                success: false, 
                messsage: "incorrect password"
            })                                          //password= input password and isPassweod= database password
            return;
        }
        res.json({
            success: true,
            users
            })
    }catch (error) {
        res.status(404).json({
            success: false,
            messsage: "indalid User !"
        });
    }
}
