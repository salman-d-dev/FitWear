"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import {BsFillBagCheckFill} from "react-icons/bs";
import {MdAccountCircle} from "react-icons/md";
import {useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart(!showCart)
  };

  const {cart, setCart, subTotal, saveCart, clearCart, addToCart, removeFromCart} = useContext(CartContext);

  useEffect(()=>{
    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.log(error)
      localStorage.clear() 
    }
  },[])

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
            <li className="w-max hover:text-purple-600">T-shirts</li>
          </Link>
          <Link href="/hoodies">
            <li className="w-max hover:text-purple-600">Hoodies</li>
          </Link>
          <Link href="/mugs">
            <li className="w-max hover:text-purple-600">Mugs</li>
          </Link>
          <Link href="/stickers">
            <li className="w-max hover:text-purple-600">Stickers</li>
          </Link>
        </ul>
      </div>
      <div className="flex">
        <button
          className="text-xl md:text-4xl absolute right-0 top-3 mx-3 "
          onClick={toggleCart}
        >
          <AiOutlineShoppingCart />
        </button>
        <Link href={"/login"} className="text-xl md:text-4xl absolute  top-3 right-12 md:right-14">
        <MdAccountCircle/>
        </Link>
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
              <AiFillMinusCircle className="cursor-pointer mx-1 text-lg text-indigo-500" onClick={()=>{removeFromCart(k, 1 , cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}}/>{cart[k].qty}<AiFillPlusCircle className="cursor-pointer mx-1 text-lg text-indigo-500" onClick={()=>{addToCart(k, 1 , cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}}/>
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
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm items-center"><BsFillBagCheckFill className="m-1"/>Checkout</button>
          </Link>

        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm items-center" onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
        ) : (null)
      }
    </div>
  );
};

export default Navbar;
