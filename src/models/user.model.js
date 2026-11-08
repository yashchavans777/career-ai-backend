import mongoose  from "mongoose";
import jwt from "JsonWebTokenError";
import bcrypt from "bcrypt";


const userSchema = new Schema(
    {
        username:{
            type:String,
            index:true,
            unique:true,
            lowercase:true,
            trim:true,
            required:true
        },
        email:{
            type:String,
            unique:true,
            require:true,
            lowercase:true,
            trim:true
        },

        
    }
)