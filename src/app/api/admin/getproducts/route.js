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
        const body = await req.json();
        const {category} = body;
        await connectToDatabase();
        const products = await productModel.find({category:category})
        return NextResponse.json(products, {status:200})
    } catch (error) {
        return NextResponse.json({ message: error },{ status: 500 })
    }

}