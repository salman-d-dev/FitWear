import React from 'react'

const Checkout = () => {
  return (
    <div className='my-8 text-center text-4xl font-bold p-4  slate-300'>
      <h1 className='my-4'>
        Checkout
      </h1>
      <div className='text-left mt-6 text-lg px-4'>

        <h2>1. Delivery Details</h2>
      </div>
      <div className="flex justify-evenly items-center  pink-200">
      <div className=" m-4 w-1/2">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="name" id="name" name="name" className="w-full  white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      <div className=" m-4 w-1/2">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full  white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>

      </div>
      <div className=' yellow-100 px-4'>
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
        <textarea id="address" name="address" className="w-full  white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>

      <div className="flex justify-evenly items-center  pink-200">
      <div className=" m-4 w-1/2">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
        <input type="text"  id="phone" name="phone" className="w-full  white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      <div className=" m-4 w-1/2">
        <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
        <input type="text" id="city" name="city" className="w-full  white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>

      </div>
      <div className="flex justify-evenly items-center  pink-200">
      <div className=" m-4 w-1/2">
        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
        <input type="state" id="state" name="state" className="w-full  white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      <div className=" m-4 w-1/2">
        <label htmlFor="pinCode" className="leading-7 text-sm text-gray-600">PIN Code</label>
        <input type="pinCode" id="pinCode" name="pinCode" className="w-full  white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>

      </div>

    </div>
  )
}

export default Checkout
