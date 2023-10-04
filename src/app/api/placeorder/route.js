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
        let outOfStock = false;
        const prodPromises = await Promise.all(
            Object.keys(cart).map(async (key) => {
                let gotProduct = await productModel.findOne({ slug: key });
                if(gotProduct.availableQty <= 0 || cart[key].qty > gotProduct.availableQty ){
                    outOfStock = true;
                }
                let productPrice = gotProduct.price * cart[key].qty;
                return actualTotal += productPrice, outOfStock;
            })
        );

        if(outOfStock){
            return NextResponse.json({error:"Out of stock"}, {status:403})
        }
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

        //Once order placed, reduce the quantity of items from DB
        const moreProdPromises = await Promise.all(
            Object.keys(cart).map(async (key) => {
                if(!outOfStock){
                    await productModel.findOneAndUpdate({slug:key}, {$inc: {availableQty: -cart[key].qty}}, {new:true});
                }
            })
        );
        
        return NextResponse.json({success:true}, {status:201})

    } catch (error) {
        console.log(error);
    }

}