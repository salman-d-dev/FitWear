import { NextResponse } from "next/server";
import { pins } from "./getcitystate/pincodes";
export async function GET(req,res){
    const onlypins = Object.keys(pins)
    return NextResponse.json(onlypins,{status:200})
}