import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/app/middleware/connectDB";
import orderModel from "@/app/models/orderModel";

export async function POST(req, res){
    try {
        
        await connectToDatabase();
        const body = await req.json();
        const {email, orderID,cart, address, subTotal} = body;
        
        const newOrder = await new orderModel({
            email:email,
            orderID: orderID,
            products:cart,
            address:address,
            amount:subTotal,
        });
        await newOrder.save();
        return NextResponse.json({success:true}, {status:201})

    } catch (error) {
        console.log(error);
    }

}