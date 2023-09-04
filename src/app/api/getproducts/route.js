import { connectToDatabase } from "../../middleware/connectDB";
import productModel from "@/app/models/productModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Connect to the database
    await connectToDatabase();

    // Fetch all products
    const products = await productModel.find();

    // Create an object to store t-shirts grouped by title
    const tshirts = {};

    // Loop through the products
    for (let item of products) {
      // If the title doesn't exist in tshirts, create a new entry
      if (!tshirts[item.title]) {
        tshirts[item.title] = JSON.parse(JSON.stringify(item));
        tshirts[item.title].color = [];
        tshirts[item.title].size = [];
      }

      // Check if the product is available (availableQty > 0)
      if (item.availableQty > 0) {
        // Check if the color is not already in the array and add it
        if (!tshirts[item.title].color.includes(item.color)) {
          tshirts[item.title].color.push(item.color);
        }

        // Check if the size is not already in the array and add it
        if (!tshirts[item.title].size.includes(item.size)) {
          tshirts[item.title].size.push(item.size);
        }
      }
    }

    // Filter out colors and sizes with availableQty === 0
    for (const title in tshirts) {
      tshirts[title].color = tshirts[title].color.filter(
        (color) =>
          products.some(
            (product) =>
              product.title === title &&
              product.color === color &&
              product.availableQty > 0
          )
      );

      tshirts[title].size = tshirts[title].size.filter(
        (size) =>
          products.some(
            (product) =>
              product.title === title &&
              product.size === size &&
              product.availableQty > 0
          )
      );
    }

    // Return the filtered tshirts object as JSON response
    return NextResponse.json(tshirts, { status: 200 });
  } catch (error) {
    console.log(error);
    // Handle errors and return an error response if needed
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
