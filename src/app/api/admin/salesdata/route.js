import {connectToDatabase} from "@/app/middleware/connectDB";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
const jwt = require('jsonwebtoken');
import orderModel from "@/app/models/orderModel";

//disable dynamic header error
export const dynamic = "force-dynamic";


export async function GET(){
    try {
        // verify admin header
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
        
        //first get all orders for the year 2023

        const startDate = new Date('2023-01-01T00:00:00.000Z'); // Start of Jan
        const endDate = new Date('2023-12-31T23:59:59.000Z'); // End of Dec
        const allOrders = await orderModel.find({ createdAt: { $gte: startDate, $lt: endDate } });

        let [jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec] = [0,0,0,0,0,0,0,0,0,0,0,0]
        allOrders.forEach((order)=>{
            const orderMonth = order.createdAt.getMonth()+1
            if(orderMonth === 1){
                jan += order.amount
            } else if(orderMonth === 2){
                feb += order.amount
            
            } else if(orderMonth === 3){
                mar += order.amount
            
            } else if(orderMonth === 4){
                apr += order.amount
            
            } else if(orderMonth === 5){
                may += order.amount
            
            } else if(orderMonth === 6){
                jun += order.amount
            
            } else if(orderMonth === 7){
                jul += order.amount
            
            } else if(orderMonth === 8){
                aug += order.amount
            
            } else if(orderMonth === 9){
                sep += order.amount
            
            } else if(orderMonth === 10){
                oct += order.amount
            
            } else if(orderMonth === 11){
                nov += order.amount
            
            }  else if(orderMonth === 12){
                dec += order.amount
            } else {
                return 0;
            }
       })

       const salesArray = [jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec]

        return NextResponse.json(salesArray,{status:200});
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error },{ status: 500 })
    }
}