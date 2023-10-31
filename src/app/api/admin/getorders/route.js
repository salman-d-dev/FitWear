import {connectToDatabase} from "@/app/middleware/connectDB";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import orderModel from "@/app/models/orderModel";
const jwt = require('jsonwebtoken');

export async function GET(){
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
        const allOrders = await orderModel.find()
        return NextResponse.json(allOrders, {status:200})
    } catch (error) {
        return NextResponse.json({ message: error },{ status: 500 })
    }

}