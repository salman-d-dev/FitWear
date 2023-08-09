import { NextResponse } from "next/server";
export async function GET(req,res){
    return NextResponse.json([560037, 110011, 560044],{status:200})
}