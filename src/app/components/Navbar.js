"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import {BsFillBagCheckFill} from "react-icons/bs";
import {MdAccountCircle} from "react-icons/md";
import {useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Navbar = () => {



  const {cart, setCart, subTotal, setSubTotal,addToCart, removeFromCart,clearCart, loggedIn, setLoggedIn, handleLogOut, showCart, toggleCart, profileDropDown, setProfileDropDown} = useContext(GlobalContext);

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        
        // Recalculate and set the subtotal based on the loaded cart data
        let subt = 0;
        let keys = Object.keys(JSON.parse(localStorage.getItem("cart")));
        for (let i = 0; i < keys.length; i++) {
          const cartItem = JSON.parse(localStorage.getItem("cart"))[keys[i]];
          subt += cartItem.price * cartItem.qty;
        }
        setSubTotal(subt);
      }
  
      // Check if the user is logged in and set the loggedIn state
      const token = localStorage.getItem("token");
      if (token) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);
  



  return (
    <div className=" flex flex-col md:flex-row justify-center md:justify-between items-center  py-2 shadow-md sticky top-0 z-50 bg-white">
      <div className="logo mx-1">
        <Link href="/">
          <Image
            src="/fitlogo3-removebg-preview.png"
            alt="FitWear Logo"
            width={160}
            height={40}
            style={{ height: "5rem", width: "5rem" }}
          />
        </Link>
      </div>
      <div>
        <ul className="flex items-center space-x-4 font-bold md:text-l my-3 md:my-0 ">
          <Link href="/tshirts">
            <li className="w-max text-black hover:text-cyan-600">T-shirts</li>
          </Link>
          <Link href="/hoodies">
            <li className="w-max text-black hover:text-yellow-400">Hoodies</li>
          </Link>
          <Link href="/mugs">
            <li className="w-max text-black hover:text-cyan-600">Mugs</li>
          </Link>
          <Link href="/stickers">
            <li className="w-max text-black hover:text-yellow-400">Stickers</li>
          </Link>
        </ul>
      </div>
      <div className="flex">
        <button
          className="text-xl md:text-4xl absolute right-0 top-3 mx-3 text-black hover:text-cyan-600"
          onClick={toggleCart}
        >
          <AiOutlineShoppingCart />
        </button>
        {/* conditionally render profile button */}

        
        <div className="absolute  top-3 right-12 md:right-14 cursor-pointer" onMouseOver={()=>{setProfileDropDown(true)}} onMouseOut={()=>{setProfileDropDown(false)}}>
        <span className={`text-xl md:text-4xl ${loggedIn? "text-green-300" : "text-black"}  hover:text-cyan-600`}>
        <MdAccountCircle />
        </span>
        {!loggedIn && profileDropDown? (<div className="flex items-center justify-center bg-cyan-100 absolute top-6 right-3 sm:right-7 px-3 py-4 w-32 h-auto rounded-md">

        <Link href={"/login"}>
        <button className="text-xs  px-2 py-1 sm:bg-black md:text-base text-white bg-black focus:outline-none hover:bg-cyan-600 rounded" >
        Login
      </button>
        </Link>  
        </div>
        ) : (profileDropDown && loggedIn && <div className="bg-cyan-300 absolute top-6 right-3 sm:right-7 px-3 py-4 w-32 rounded-md">
      <ul>
        <Link href={"/myaccount"}><li className="my-1 text-base text hover:text-blue-600 hover:font-bold">My Account</li></Link>
        <Link href={"/myorders"}><li className="my-1 text-base text hover:text-blue-600 hover:font-bold">Orders</li></Link>
        <li className="my-1 text-base cursor-pointer text hover:text-blue-600 hover:font-bold" onClick={handleLogOut}>Logout</li>
      </ul>
        </div>)}
        </div>
      </div>
      {
        showCart? (

      <div className="overflow-y-scroll cartBar w-72 h-full fixed top-0 right-0 bg-cyan-100 p-10 px-8 z-50 ">
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <ol className="list-decimal font-semibold border-b border-gray-800">
          {Object.keys(cart).length == 0 && <div className="my-4 font-bold text-center text-sm">
            Your cart is Empty!
            </div>}
          {Object.keys(cart).map((k)=>{return <li key={k}>
            <div className="item flex">
              <div className="w-2/3  font-semibold my-3">
                {cart[k].name}
              </div>
              <div className="w-1/3  flex items-center justify-center font-semibold">
              <AiFillMinusCircle className="cursor-pointer mx-1 text-lg text-black" onClick={()=>{removeFromCart(k, 1 , cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}}/>{cart[k].qty}<AiFillPlusCircle className="cursor-pointer mx-1 text-lg text-black" onClick={()=>{addToCart(k, 1 , cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}}/>
              </div>
            </div>
          </li> })}
          
        </ol>
        <div className="text-lg font-bold ">
          Total: ₹{subTotal}
        </div>
        <span className="absolute top-1.5 right-2.5 text-xl cursor-pointer text-indigo-800" onClick={toggleCart}>
          <AiFillCloseCircle />
        </span>
        <div className="flex">
          <Link href={"/checkout"}>
        <button disabled={subTotal === 0? true : false} className="flex mx-auto mt-16 text-white bg-black border-0 py-2 px-2 focus:outline-none hover:bg-black rounded text-sm items-center disabled:bg-gray-600"><BsFillBagCheckFill className="m-1"/>Checkout</button>
          </Link>

        <button disabled={subTotal === 0? true : false} className="flex mx-auto mt-16 text-white bg-black border-0 py-2 px-2 focus:outline-none hover:bg-black rounded text-sm items-center disabled:bg-gray-600" onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
        ) : (null)
      }
    </div>
  );
};

export default Navbar;
