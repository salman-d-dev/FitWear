import { NextResponse } from "next/server";
const jwt = require('jsonwebtoken');
import { connectToDatabase } from "@/app/middleware/connectDB";
import userModel from "@/app/models/userModel";
// import {headers} from 'next/headers';


export async function POST(req,res){
    try {
        // const headerList = headers();
        const body = await req.json();
        const {token} = body;
        // const token = headerList.get('token');
        if(!token){
            return NextResponse.json("No token found!",{status:401});
        }
        const emailFromToken = await jwt.verify(token, process.env.JWT_SECRET);
        if(!emailFromToken){
            return NextResponse.json("Token verification failed!",{status:401});
        }
        await connectToDatabase();
        const user = await userModel.findOne({email: emailFromToken.user})
        if(!user){
            return NextResponse.json("User not found!",{status:404});
        }
        return NextResponse.json({name:user.name, email:user.email, address:user.address, phone:user.phone}, {status:200});
    } catch (error) {
        console.log(error)
    }
}