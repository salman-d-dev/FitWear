import userModel from "@/app/models/userModel";
import { connectToDatabase } from "@/app/middleware/connectDB";
import { NextResponse } from "next/server";
//for pass and jwt
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

export async function POST(NextRequest, res){
    try {
        await connectToDatabase();
        const body = await NextRequest.json();
        const {email, password} = body;
        const foundUser = await userModel.findOne({email:email, isAdmin:true})
        if(!foundUser){
            return NextResponse.json({error:"Admin not found!"}, {status:404})
        } else { 
            //compare pass
            const comparePass = await bcryptjs.compare(password, foundUser.password)
            if(!comparePass){
                return NextResponse.json({error:"Incorrect Password!"}, {status:401 })
                //pass is right, need to generate a jwt and send
            } else {
                const userIDPayload = {user : foundUser._id};
                const secretKey = process.env.JWT_SECRET;
                const token = await jwt.sign(userIDPayload , secretKey, {expiresIn:"10h"}) //will expire after 10h
                return NextResponse.json({"admin-token":token, dev:foundUser.name},{status:200})
            }
        }
    } catch (error) {
        return NextResponse.json({error},{status:500})
    }
}