"use client"
import {React, useContext} from 'react';
import { CartContext } from '../context/CartContext';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import {BsFillBagCheckFill} from "react-icons/bs";
import Link from 'next/link';

const Checkout = () => {

  const {cart, addToCart, removeFromCart,subTotal} = useContext(CartContext);

  return (
    <div className='my-8 text-center text-4xl font-bold p-4'>
      <h1 className='my-4'>
        Checkout
      </h1>
      <div className='text-left mt-6 text-xl px-4'>
        <h2>1. Delivery Details</h2>
      </div>
      <div className="flex justify-evenly items-center bg-slate-50 rounded-lg">
      <div className=" m-4 w-1/2">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="name" id="name" name="name" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      <div className=" m-4 w-1/2">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>

      </div>
      <div className='px-4 bg-slate-50 rounded-lg'>
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
        <textarea id="address" name="address" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>

      <div className="flex justify-evenly items-center bg-slate-50 rounded-lg">
      <div className=" m-4 w-1/2">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
        <input type="text"  id="phone" name="phone" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      <div className=" m-4 w-1/2">
        <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
        <input type="text" id="city" name="city" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>

      </div>
      <div className="flex justify-evenly items-center bg-slate-50 rounded-lg">
      <div className=" m-4 w-1/2">
        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
        <input type="state" id="state" name="state" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      <div className=" m-4 w-1/2">
        <label htmlFor="pinCode" className="leading-7 text-sm text-gray-600">PIN Code</label>
        <input type="pinCode" id="pinCode" name="pinCode" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>

      </div>
      <div className='text-left mt-6 text-xl px-4'>
        <h2>2. Review Cart Details</h2>
      </div>
      <div className='bg-slate-100 p-10 rounded-xl'>

        <ol className="list-decimal font-semibold text-sm border-b border-gray-800 ">
          {Object.keys(cart).length == 0 && <div className="my-4 font-bold text-center text-sm">
            Your cart is Empty!
            </div>}
          {Object.keys(cart).map((k)=>{return <li key={k}>
            <div className="flex text-sm space-x-10">
              <div className="font-semibold my-5">
                {cart[k].name}
              </div>
              <div className="font-semibold flex items-center justify-center">
                ₹{cart[k].price}
              </div>

              <div className="flex items-center justify-center font-semibold">X 
              <AiFillMinusCircle className="cursor-pointer mx-1 text-lg text-indigo-500" onClick={()=>{removeFromCart(k, 1 , cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}}/>{cart[k].qty}<AiFillPlusCircle className="cursor-pointer mx-1 text-lg text-indigo-500" onClick={()=>{addToCart(k, 1 , cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}}/>
              </div>
            </div>
          </li> })}
          
        </ol>
        <div className='flex justify-between md:justify-evenly pt-4 items-center'>
        {!(Object.keys(cart).length ==0) && 
        (<>
          <h3 className='text-left text-lg '>
            Total: ₹{subTotal}
            </h3>
        <button className=" flex px-2 py-1 items-center justify-center text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded text-sm w-1/8"><BsFillBagCheckFill className='block'/>Pay ₹{subTotal}</button> 
        </>)
        }
        </div>
        </div>
      </div>

  )
}

export default Checkout
