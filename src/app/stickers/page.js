import React from 'react';
import Link from 'next/link';

import productModel from '../models/productModel';
import { connectToDatabase } from '@/app/middleware/connectDB';

const getStickers = async()=> {
      // Connect to the database
      await connectToDatabase();

      // Fetch all products
      const products = await productModel.find({category:"Stickers"});
  
      // Create an object to store t-shirts grouped by title
      const stickers = {};
  
      // Loop through the products
      for (let item of products) {
        // If the title doesn't exist in stickers, create a new entry
        if (!stickers[item.title]) {
          stickers[item.title] = JSON.parse(JSON.stringify(item));
          stickers[item.title].color = [];
          stickers[item.title].size = [];
        }
  
        // Check if the product is available (availableQty > 0)
        if (item.availableQty > 0) {
          // Check if the color is not already in the array and add it
          if (!stickers[item.title].color.includes(item.color)) {
            stickers[item.title].color.push(item.color);
          }
  
          // Check if the size is not already in the array and add it
          if (!stickers[item.title].size.includes(item.size)) {
            stickers[item.title].size.push(item.size);
          }
        }
      }
  
      // Filter out colors and sizes with availableQty === 0
      for (const title in stickers) {
        stickers[title].color = stickers[title].color.filter(
          (color) =>
            products.some(
              (product) =>
                product.title === title &&
                product.color === color &&
                product.availableQty > 0
            )
        );
  
        stickers[title].size = stickers[title].size.filter(
          (size) =>
            products.some(
              (product) =>
                product.title === title &&
                product.size === size &&
                product.availableQty > 0
            )
        );
      }
      return stickers;
}


const Stickers = async() => {
  const products = await getStickers();
  return ( 
    <div className='p-2'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Repeat this block for each image */}
            {Object.keys(products).map((key)=>{
              return <div key={products[key]._id}>
            <Link href={`product/${products[key].slug}`}>
              <div className="p-2 border rounded-md shadow-lg">
                <div className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto h-52 md:h-80 md:w-full object-cover"
                    src={products[key].img}
                  />
                </div>
                <div className="mt-2 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[key].category}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{products[key].title}</h2>
                  <p className="mt-1">₹{products[key].price}</p>

                  {/* We could have used map function here too for the size */}
                  <div className="my-1">
                    {products[key].size.includes('S') && <span className='border border-slate-600 px-1 mx-1'>S</span>}
                    {products[key].size.includes('M') && <span className='border border-slate-600 px-1 mx-1'>M</span>}
                    {products[key].size.includes('L') && <span className='border border-slate-600 px-1 mx-1'>L</span>}
                    {products[key].size.includes('XL') && <span className='border border-slate-600 px-1 mx-1'>XL</span>}
                    {products[key].size.includes('C') && <span className='border border-slate-600 px-1 mx-1'>C</span>} 
                  </div>

                    {/* map each color for the color button */}
                    {products[key].color.length > 0 && (
                            <div className="my-1">
                                {products[key].color.map((col) => (
                                <button key={col} style={{ backgroundColor: col }} className="ml-1 rounded-full w-5 h-5 focus:outline-none "></button>
                                ))}
                            </div>
                          )}
                      
                   
                </div>
              </div>
            </Link>
            </div>})
            }
            
            
            {/* Repeat the above block for each of the remaining images */}
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stickers;
