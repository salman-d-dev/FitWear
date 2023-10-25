import { NextResponse } from "next/server";
const jwt = require('jsonwebtoken');
import { connectToDatabase } from "@/app/middleware/connectDB";
import userModel from "@/app/models/userModel";
import { headers } from 'next/headers';

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { name, phone, address } = body;
    const headerList = headers();
    const token = headerList.get('token');
    if (!token) {
      return NextResponse.json("No token found!", { status: 401 });
    }
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      return NextResponse.json("Token verification failed!", { status: 401 });
    }
    await connectToDatabase();

    // Build an object with the fields you want to update
    const updateFields = {};
    if (name) updateFields.name = name;
    if (phone) updateFields.phone = phone;
    if (address) updateFields.address = address;

    // Find and update the user with the specified fields
    const userUpdated = await userModel.findOneAndUpdate(
      { email: decodedToken.user },
      updateFields,
      { new: true } // To return the updated user
    );
    if(userUpdated){
        return NextResponse.json("User updated successfully", { status: 200 });
    }
    return NextResponse.json("Something went wrong",{status:400})
  } catch (error) {
    console.log(error);
    return NextResponse.json("An error occurred", { status: 500 });
  }
}
