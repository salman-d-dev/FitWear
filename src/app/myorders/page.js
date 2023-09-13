import React from 'react'

export async function getOrders (){

}

const  MyOrders= () => {
  return (

<div className='container bg-slate-200 p-3'>
    <h1 className='text-center text-xl font-bold my-4'>My Orders</h1>
    <div className="relative overflow-x-auto rounded-md">
        <table className="w-full text-sm text-left">
            <thead className="text-sm text-gray-700 uppercase  bg-cyan-100">
                <tr className='border-b-2 border-gray-400'>
                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Color
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-cyan-50 border-b hover:bg-green-100">
                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                        Apple MacBook Pro 17
                    </th>
                    <td className="px-6 py-4">
                        Silver
                    </td>
                    <td className="px-6 py-4">
                        Laptop
                    </td>
                    <td className="px-6 py-4">
                        $2999
                    </td>
                </tr>
                <tr className="bg-cyan-50 border-b hover:bg-green-100">
                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                        Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">
                        White
                    </td>
                    <td className="px-6 py-4">
                        Laptop PC
                    </td>
                    <td className="px-6 py-4">
                        $1999
                    </td>
                </tr>
                <tr className="bg-cyan-50 border-b hover:bg-green-100">
                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                        Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">
                        Black
                    </td>
                    <td className="px-6 py-4">
                        Accessories
                    </td>
                    <td className="px-6 py-4">
                        $99
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</div>
  )
}

export default MyOrders;
