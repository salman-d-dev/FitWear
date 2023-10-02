import { connectToDatabase } from "@/app/middleware/connectDB";
import orderModel from "@/app/models/orderModel";
import { NextResponse } from "next/server";

export async function GET(req,{params}) {
    const {id} = params;
    const decodedID = decodeURIComponent(id)
  try {
    // Connect to the database
    await connectToDatabase();

    // Fetch orders
    const order = await orderModel.findById(decodedID);
    if(!order){
        return NextResponse.json(`Order not found with ID: ${decodedID}`, { status: 404 });
    }

    return NextResponse.json({order}, { status: 200 });


  } catch (error) {
    console.log(error);
    // Handle errors and return an error response if needed
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
