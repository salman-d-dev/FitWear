import {connectToDatabase} from "../../middleware/connectDB";
import productModel from "@/app/models/productModel";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        
        await connectToDatabase();
        const products = await productModel.find();
        return NextResponse.json(products, {status:200});
    } catch (error) {
        console.log(error)
    }
}