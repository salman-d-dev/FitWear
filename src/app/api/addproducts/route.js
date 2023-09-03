import {connectToDatabase} from "../../middleware/connectDB";
import productModel from "@/app/models/productModel";
import { NextResponse } from "next/server";

export async function POST(req,res){
    try {
        await connectToDatabase();
        const body = await req.json()
        for(let i= 0; i<body.length; i++){
            const newProduct = new productModel({
                title: body[i].title,
                slug: body[i].slug,
                description: body[i].description,
                img: body[i].img,
                category: body[i].category,
                size: body[i].size,
                color: body[i].color,
                price: body[i].price,
                availableQty: body[i].availableQty
            });
            await newProduct.save();
        };
        return NextResponse.json({sucess:"Product saved"},{status:201})
    } catch (error) {
        return NextResponse.json({ message: error },{ status: 500 })
    }
}