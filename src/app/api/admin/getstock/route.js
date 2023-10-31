import {connectToDatabase} from "@/app/middleware/connectDB";
import productModel from "@/app/models/productModel";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
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
        const allProducts = await productModel.find();
        
        let [shirtCount,hoodCount, mugCount, stickCount] = [0,0,0,0]

        allProducts.forEach((product)=>{
            switch (product.category) {
                case "T-Shirts":
                    shirtCount+= product.availableQty
                    break;
                case "Hoodies":
                    hoodCount+= product.availableQty
                    break;
                case "Mugs":
                    mugCount+= product.availableQty
                    break;
                case "Stickers":
                    stickCount+= product.availableQty
                    break;
            
                default:
                    break;
            }
        });

        const stockMatrix = [shirtCount,hoodCount,mugCount, stickCount]
        return NextResponse.json(stockMatrix, {status:200});

    } catch (error) {
        return NextResponse.json({ message: error },{ status: 500 })
        
    }
}