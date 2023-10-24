import { NextResponse } from "next/server";
import { pins } from "./mypins";

export async function GET(req, res) {
  try {
    return NextResponse.json(pins, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
