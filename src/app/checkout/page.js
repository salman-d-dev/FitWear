"use client"
import {React, useContext, useEffect, useState} from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import {BsFillBagCheckFill} from "react-icons/bs";
import NotAvailable from '../_components/NotAvailable';
import { toast } from 'react-toastify';

const Checkout = () => {

  const {cart, addToCart, removeFromCart,subTotal, showPayment, setShowPayment, handlePlaceOrder,name, setName, email, setEmail,  phone, setPhone,address, setAddress,fetchCityState, getUser,router, updateUser} = useContext(GlobalContext);

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      toast.warn("Please Login to place order", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      router.push("/login")
    } else{
      const fetchUserData = async()=>{
        const data = await getUser();
        if(data){
          if(data.name){
            setName(data.name)
          }
          if(data.email){
            setEmail(data.email)
          }
          if(data.phone){
            setPhone(data.phone)
          }
          if(data.address){
            setAddress(data.address)
          }
      }
      }
      fetchUserData();
    }
},[]);

useEffect(() => {
  fetchCityState();
}, [address.pincode]);

  //for email validation
function isValidEmail(email) {
const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
return emailRegex.test(email);
}

  //form validation
  const errorsExist = ()=>{
    if((name === "" || name === null || name === undefined)|| (email === "" || email === null || email === undefined)|| (address.locality === "" || address.locality === null || address.locality === undefined || address.locality.length < 5) || (phone === "" || phone === null || phone === undefined || phone.length !== 10) || (address.pincode === "" || address.pincode === null || address.pincode === undefined || address.pincode.length !== 6) || (address.city === "" || address.city === null || address.city === undefined) || (address.state === "" || address.state === null || address.state === undefined) || !isValidEmail(email)){
      return true;
    } else {
      return false;
    }
  }

  const handleAddressChange =(e)=>{
    setAddress({...address, [e.target.name]: e.target.value})
  }
  return (
    <div className='my-8 text-center text-4xl font-bold p-4 relative'>
      <h1 className='my-4'>
        Checkout
      </h1>
      <div className='text-left mt-6 text-xl px-4'>
        <h2>1. Delivery Details</h2>
      </div>
      <div className="flex justify-evenly items-center bg-slate-50 rounded-lg">
      <div className=" m-4 w-1/2">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input readOnly value={name} placeholder='Full Name'type="name" id="name" name="name" className="w-full  rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:font-normal bg-slate-200"/>
        </div>
      <div className=" m-4 w-1/2">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input readOnly value={email} placeholder="Please enter you email" type="email" id="email" name="email" className="w-full  rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:font-normal bg-slate-200"/>
        </div>

      </div>
      <div className='px-4 bg-slate-50 rounded-lg'>
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Locality</label>
        <textarea value={address.locality} placeholder='Building / Lane / Locality' onChange={handleAddressChange} id="address" name="locality" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out placeholder:font-normal"></textarea>
      </div>

      <div className="flex justify-evenly items-center bg-slate-50 rounded-lg">
      <div className=" m-4 w-1/2">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
        <input value={phone} placeholder="Your 10 digit phone number" onChange={(e)=>{setPhone(e.target.value)}} type="text"  id="phone" name="phone" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:font-medium appearance-none"/>
        </div>
      <div className=" m-4 w-1/2">
      <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pin Code</label>
        <input value={address.pincode} placeholder='Postal Index Number' onChange={handleAddressChange} type="text" id="pinCode" name="pincode" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:font-normal"/>
        </div>

      </div>
      <div className="flex justify-evenly items-center bg-slate-50 rounded-lg">
      <div className=" m-4 w-1/2">
        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
        <input value={address.state} type="state" id="state" name="state" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-slate-200" readOnly={true}/>
        </div>
        
      <div className=" m-4 w-1/2">
      <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
        <input value={address.city} type="text" id="city" name="city" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-slate-200" readOnly={true}/>
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
        <button disabled={errorsExist()} className="disabled:bg-slate-600 flex px-2 py-1 items-center justify-center text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded text-sm w-1/8" onClick={(e)=>{
          setShowPayment(true);
          handlePlaceOrder(e);
          updateUser(name,address, phone);
          }}>
            <BsFillBagCheckFill className='block'/>Pay ₹{subTotal}</button> 
        </>)
        }
        </div>
        </div>
        {showPayment && 
          <NotAvailable showPayment={showPayment} setShowPayment={setShowPayment}/>
        }
      </div>

  )
}

export default Checkout
