"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const AllOrders = () => {
  const router = useRouter();

  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(true);
  useEffect(()=>{
    if(!localStorage.getItem('admin-token')){
      router.push('/admin')
    }

    const fetchAllOrders = async()=>{
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/getorders`,{
        method:"GET",
        headers:{
          "admin-token":localStorage.getItem("admin-token"),
          }
        }
      );
      if(response.status === 200){
        const parsedOrders = await response.json();
        setOrders(parsedOrders);
      }
    }
    fetchAllOrders();

  },[])
  return (
    <div className='container bg-slate-200 p-3 min-h-screen'>
    <h1 className='text-center font-sans text-[1.5rem] font-semibold my-4'>All Orders ({orders?.length})<span className=' text-blue-400 font-extrabold text-xs cursor-pointer inline-block w-3 mx-2' onClick={()=>{setShowOrders((prevState)=> !prevState)}}>{`${showOrders? "(Hide)" : "(Show)"}`}</span></h1>
    <div className="relative overflow-x-auto rounded-md">
      <table className="w-full text-sm text-left">
        <thead className="text-sm text-gray-700 uppercase  bg-cyan-100">
          <tr className='border-b-2 border-gray-400'>
            <th scope="col" className="px-6 py-3">
              ORDER
            </th>
            <th scope="col" className="px-6 py-3">
              ITEMS
            </th>
            <th scope="col" className="px-6 py-3">
              AMOUNT
            </th>
            <th scope="col" className="px-6 py-3">
              DATE
            </th>
          </tr>
        </thead>
        {showOrders &&(
        
        <tbody>
          {orders &&
            orders.map((orderItem) => {return(

                <tr
                  key={orderItem._id}
                  className="bg-cyan-50 border-b hover:bg-green-100"
                >
                   <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                    {Object.keys(orderItem.products).length>3 ? Object.keys(orderItem.products).slice(0,3).map((itemName) => orderItem.products[itemName].name).join(", ")+" ..." : 
                    Object.keys(orderItem.products).slice(0,3).map((itemName) => orderItem.products[itemName].name).join(", ")} {/* Join the items into a comma-separated string */}
                  </th>
                  <td className="px-6 py-4">{Object.keys(orderItem.products).length}</td>
                  <td className="px-6 py-4">₹{orderItem.amount}</td>
                  <td className="px-6 py-4">{new Date(orderItem.createdAt).toLocaleDateString('en-US', {year: 'numeric',month: 'short',day:'numeric'})}</td>
                </tr>
            )
            })}
        </tbody>
        )}
      </table>
    </div>
  </div>
  )
}

export default AllOrders
