import { connectToDatabase } from "@/app/middleware/connectDB";
import productModel from "@/app/models/productModel";
import { NextResponse } from "next/server";

export async function GET(req,{params}) {
    const {slug} = params;
    const decodedSlug = decodeURIComponent(slug)
  try {
    // Connect to the database
    await connectToDatabase();

    // Fetch products
    const slugProduct = await productModel.findOne({slug:decodedSlug });
    const prodVariants = await productModel.find({title: slugProduct.title})
    const colorSizeSlug = {} //{red : xl : {slug: "fit-wear-xl"}}

    //create slug for color and size variant
    for(let item of prodVariants){
      if(Object.keys(colorSizeSlug).includes(item.color)){
        colorSizeSlug[item.color][item.size] = {slug: item.slug, img: item.img, price: item.price}
      } else {
        colorSizeSlug[item.color] = {}
        colorSizeSlug[item.color][item.size] = {slug: item.slug, img: item.img, price: item.price}

      }
    }


    // Return the filtered tshirts object as JSON response
    return NextResponse.json({product:JSON.parse(JSON.stringify(slugProduct)),variants:JSON.parse(JSON.stringify(colorSizeSlug))}, { status: 200 });
  } catch (error) {
    console.log(error);
    // Handle errors and return an error response if needed
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
