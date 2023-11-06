"use client"
import { GlobalContext } from "../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import LoadingSpinner from "../_components/LoadingSpinner";


const  MyOrders= () => {
    const context = useContext(GlobalContext);
    const {myOrders, setMyOrders, getMyOrders, router} = context;
    const [orderNotFound, setOrderNotFound] = useState(false)
    useEffect(()=>{
        const fetchOrders = async()=>{
            const ordersData = await getMyOrders();
            if(ordersData.length===0 || ordersData.length===undefined || ordersData.length===null){
              setOrderNotFound(true)
            }
            setMyOrders(ordersData)
        }
        const loggedIn = localStorage.getItem('token')
        if(!loggedIn){
          router.push("/login")
        }
        fetchOrders();

    },[])

//if no orders made, show this 
if (orderNotFound) {
  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">You have not ordered anything!</h1>
        <p className="text-gray-600">Start shopping now and place your first order.</p>
        {/* Add a button or link to go to the shopping page */}
        <Link href="/" className="text-blue-500 hover:underline">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

if(myOrders.length === 0 ){
    return (<LoadingSpinner/>)
}

return (
    <>
      <div className='container bg-slate-200 dark:bg-gradient-to-tr from-black to-[#01172e] dark:text-slate-200 p-3 min-h-screen'>
        <h1 className='text-center text-xl font-bold my-4'>My Orders</h1>
        <div className="relative overflow-x-auto rounded-md">
          <table className="w-full text-sm text-left">
            <thead className="text-sm text-gray-700 uppercase  bg-cyan-100 dark:bg-cyan-950 dark:text-gray-200">
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
                <th scope="col" className="px-6 py-3">
                  DETAILS
                </th>
              </tr>
            </thead>
            <tbody>
              {myOrders &&
                myOrders.map((orderItem) => {return(

                    <tr
                      key={orderItem._id}
                      className="bg-cyan-50 dark:bg-blue-950 dark:text-gray-200 border-b dark:hover:bg-black hover:bg-green-100"
                    >
                       <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        {Object.keys(orderItem.products).length>3 ? Object.keys(orderItem.products).slice(0,3).map((itemName) => orderItem.products[itemName].name).join(", ")+" ..." : 
                        Object.keys(orderItem.products).slice(0,3).map((itemName) => orderItem.products[itemName].name).join(", ")} {/* Join the items into a comma-separated string */}
                      </th>
                      <td className="px-6 py-4">{Object.keys(orderItem.products).length}</td>
                      <td className="px-6 py-4">₹{orderItem.amount}</td>
                      <td className="px-6 py-4">{new Date(orderItem.createdAt).toLocaleDateString('en-US', {year: 'numeric',month: 'short',day:'numeric'})}</td>
                      <td className="px-6 py-4 text-blue-600"><Link href={`/order/${orderItem._id}`}>View</Link></td>
                    </tr>
                )
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
  
    }

export default MyOrders;
