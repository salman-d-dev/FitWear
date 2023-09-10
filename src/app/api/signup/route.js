import userModel from "@/app/models/userModel";
import { connectToDatabase } from "@/app/middleware/connectDB";
import { NextResponse } from "next/server";
const bcryptjs = require('bcryptjs');

export async function POST(req, res){
    try {
        await connectToDatabase();
        const body = await req.json();
        const {name, email, password} = body;
        const userExists = await userModel.findOne({email:email})
        if(userExists){
            return NextResponse.json({error:"Email taken already"}, {status:401})
        } else {
            //generate salts and create a hash password
            const salts = await bcryptjs.genSalt();
            const securePass = await bcryptjs.hash(password, salts);
            const newUser = new userModel({name:name, email:email, password:securePass});
            await newUser.save();
            return NextResponse.json({sucess:"User created!", user:newUser},{status:201})
        }
    } catch (error) {
        return NextResponse.json({error},{status:500})
    }
}