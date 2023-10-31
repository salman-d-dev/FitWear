"use client";
import { GlobalContext } from "@/app/context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import LoadingSpinner from "@/app/_components/LoadingSpinner";

export default function Product({ params }) {

  const { id } = params;
  const decodedID = decodeURIComponent(id);
  const {getOrder} = useContext(GlobalContext);
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getOrderData = async() =>{
        try {
            const data = await getOrder(decodedID);
            if(data){
                setOrder(data.order);
                setLoading(false);

            }
        } catch (error) {
            console.log(error);
        }
    }
    getOrderData();
}, []);

//   Conditional rendering, only render when order is available
  if (loading) {
return(
  <LoadingSpinner/>
) // We can render a loading indicator or return an empty component
  } 
return (
    <div>
        <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Fit-Wear</h2>
        <h1 className="text-gray-900 text-2xl title-font font-medium mb-4">Order ID: #{order._id.slice(0,15)}</h1>
        <div className="flex mb-4">
            <span className="flex-grow text-green-500  py-2 text-lg px-1">Your order has been placed successfully</span>
        </div>
        <div className="flex mb-4">
            <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-center">Item</span>
            <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-center">Quantity</span>
            <span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-center">Price</span>
        </div>
        {order && Object.keys(order.products).map((productName)=>{
            return(
        <div className="flex border-b  py-2 justify-around" key={order.products[productName].name}>
            <span className=" text-gray-500 w-2/4">{order.products[productName].name}</span>
            <span className=" text-gray-900 mx-3 w-1/4">{order.products[productName].qty}</span>
            <span className=" text-gray-900 w-1/4 text-center">₹{order.products[productName].price}/-</span>
        </div>
            )
        })}
        <div className="flex my-3">
            <span className="title-font font-medium text-2xl text-gray-900">Total: ₹{order.amount}</span>
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track Order</button>
        </div>
        </div>
        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-80 h-64 object-cover object-center rounded" src={order && order.img}/>
    </div>
    </div>
</section>
    </div>
    )
}
