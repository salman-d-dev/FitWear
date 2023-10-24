import { NextResponse } from "next/server";
import { pins } from "./pincodes";
  
  // Add more cities and pin codes as needed
  
export async function POST(req,res){
    const body = await req.json();
    const {pincode} = body;
    if(pincode in pins){
        return NextResponse.json(pins[pincode], {status:200})
    } else {
        return NextResponse.json({error:"Pin code not available"},{status:404});
    }

}