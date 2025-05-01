import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const SignUp =async (req,res)=>{
    try {
        const {fullname,email,password}=req.body;
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }
      
        const user =await User.findOne({email})
        if(user){
            return res.status(400).json({message:"Email already exists."})
        }
        const hashPassword=await bcryptjs.hash(password,10)
        const createdUser = new User({
            fullname,
            email,
            password: hashPassword 
        })
        
        await createdUser.save(); 
        res.status(200).json({message:"User created Successfully",
            user:{
                _id:createdUser._id,
                fullname:createdUser.fullname,
                password:createdUser.password
            }
            
        })
    } catch (error) {
        if(error.response){
            console.log("Error: "+error.response.data.message)
            res.status(500).json({message:"Inetrnal server"})
        }
    }
}

export const login=async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user=await User.findOne({email})
        const isMatch =await bcryptjs.compare(password,user.password)
        if(!user ||!isMatch){
            return res.status(400).json({msg:"Invalid Username or Password"})
        }else{
            res.status(200).json({msg:"Login Successfully",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("Error: "+error.meessage)
        return res.status(500).json({msg:"Inetrnal server error"})
    }
}