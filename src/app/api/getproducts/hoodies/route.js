import { connectToDatabase } from "@/app/middleware/connectDB";
import productModel from "@/app/models/productModel";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await connectToDatabase();
        const tshirts = await productModel.find({category:"Hoodies"});
        return NextResponse.json(tshirts, {status:200})
    } catch (error) {
    return NextResponse.error({error: error.message}, { status: 500 });
        
    }
}