const jwt = require('jsonwebtoken');
import orderModel from '@/app/models/orderModel';
import { NextResponse } from 'next/server';


export async function POST(req,res){
    const body = await req.json();
    const {token} = body;
    const secretKey = process.env.JWT_SECRET;
    const deCodedToken = await jwt.verify(token, secretKey);
    if(!deCodedToken){
        return NextResponse.json({error:"Token verification failed"},{status:401})
    }
    const userEmail = deCodedToken.user;
    if(userEmail){
        const userOrders = await orderModel.find({email:userEmail}).sort({createdAt: -1});
        return NextResponse.json(userOrders, {status:200})
    }

}