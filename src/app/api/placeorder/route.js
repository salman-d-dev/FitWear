import {  NextResponse } from "next/server";
import { connectToDatabase } from "@/app/middleware/connectDB";
import orderModel from "@/app/models/orderModel";
//for data tamper check
import productModel from "@/app/models/productModel";

export async function POST(req, res){
    try {
        
        await connectToDatabase();
        const body = await req.json();
        const {email, orderID,cart, address, subTotal} = body;


        //find all products with cart slug and compare the actual DB value to the cart value
        let actualTotal = 0;
        const prodArray = await Promise.all(
            Object.keys(cart).map(async (key) => {
                let gotProduct = await productModel.findOne({ slug: key });
                let productPrice = gotProduct.price * cart[key].qty;
                return actualTotal += productPrice;
            })
        );

        if(actualTotal !== subTotal){
            return NextResponse.json({error:"Data tampered", actualTotal: actualTotal, subTotal : subTotal}, {status:400})
        };

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