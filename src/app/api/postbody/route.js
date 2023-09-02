import { NextResponse } from "next/server";

export async function POST(req,res){
        const body = await req.json();
        const {name, age} = body;
        return  await NextResponse.json(`Heyy ${name} is ${age} years old?`,{status:201})
}