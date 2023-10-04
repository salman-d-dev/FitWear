import { NextResponse } from "next/server";

const pinData = {
    "110001": ["New Delhi", "Delhi"],
    "400001": ["Mumbai", "Maharashtra"],
    "700001": ["Kolkata", "West Bengal"],
    "600001": ["Chennai", "Tamil Nadu"],
    "500001": ["Hyderabad", "Telangana"],
    "380001": ["Ahmedabad", "Gujarat"],
    "560001": ["Bangalore", "Karnataka"],
    "700027": ["Howrah", "West Bengal"],
    "411001": ["Pune", "Maharashtra"],
    "682001": ["Kochi", "Kerala"],
    "110002": ["Connaught Place", "Delhi"],
    "400006": ["Grant Road", "Mumbai"],
    "600006": ["George Town", "Chennai"],
    "500002": ["Secunderabad", "Telangana"],
    "380002": ["Gandhinagar", "Gujarat"],
    "560002": ["Bangalore GPO", "Karnataka"],
    "411002": ["Sadar Bazar", "Pune"],
    "682002": ["Ernakulam", "Kerala"],
  };
  
  // Add more cities and pin codes as needed
  
export async function POST(req,res){
    const body = await req.json();
    const {pincode} = body;
    if(pincode in pinData){
        return NextResponse.json(pinData[pincode], {status:200})
    } else {
        return NextResponse.json({error:"Pin code not available"},{status:404});
    }

}