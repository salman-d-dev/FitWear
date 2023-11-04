import {connectToDatabase} from "@/app/middleware/connectDB";
import productModel from "@/app/models/productModel";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
const jwt = require('jsonwebtoken');

export async function POST(req,res){
    try {
        
        //verify admin header
        const headerList = headers();
        const adminToken = headerList.get('admin-token');
        if(!adminToken){
            return NextResponse.json({error:"No admin token"},{status:401})
        }
        const decryptedToken = await jwt.verify(adminToken, process.env.JWT_SECRET);
        if(!decryptedToken){
            return NextResponse.json({error:"Invalid admin token"},{status:401})
        }
        await connectToDatabase();
        const body = await req.json();
        const {id} = body;
        await productModel.findByIdAndDelete({_id: id});
        return NextResponse.json({sucess:"Deleted"},{status:200});

    } catch (error) {
        return NextResponse.json({ message: error.message },{ status: 500 })
    }
}