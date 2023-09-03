import {connectToDatabase} from "../../middleware/connectDB";
import productModel from "@/app/models/productModel";
import { NextResponse } from "next/server";

export async function POST(req,res){
    try {
        await connectToDatabase();
        const body = await req.json()
        for(let i= 0; i<body.length; i++){
            const findAndUpdateProd = await productModel.findByIdAndUpdate(body[i]._id, body[i])
        };
        return NextResponse.json({sucess:"Products updated"},{status:201})
    } catch (error) {
        return NextResponse.json({ message: error },{ status: 500 })
    }
}