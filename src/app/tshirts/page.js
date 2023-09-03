import React from 'react';
import Link from 'next/link';

import productModel from '../models/productModel';
import { connectToDatabase } from '@/app/middleware/connectDB';

const getProducts = async()=> {
  await connectToDatabase();
  const productsData = await productModel.find({category:"T-Shirts"});
  return productsData
}


const Tshirts = async() => {
  const products = await getProducts();
  console.log(products)
  return ( 
    <div className='p-2'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Repeat this block for each image */}
            {products.map((product)=>{
              return <div key={product._id}>
            <Link href={`product/${product.slug}`}>
              <div className="p-2 border rounded-md shadow-lg">
                <div className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto h-52 md:h-80 md:w-full object-cover"
                    src={product.img}
                  />
                </div>
                <div className="mt-2 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                  <p className="mt-1">₹{product.price}</p>
                  <p className="mt-1">{product.size}</p>
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

export default Tshirts;
