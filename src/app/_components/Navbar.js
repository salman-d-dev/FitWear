"use client";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const {
    cart,
    setCart,
    subTotal,
    setSubTotal,
    addToCart,
    removeFromCart,
    clearCart,
    loggedIn,
    setLoggedIn,
    handleLogOut,
    showCart,
    setShowCart,
    toggleCart,
    profileDropDown,
    setProfileDropDown,
  } = useContext(GlobalContext);

  const [showCartIcon, setShowCartIcon] = useState(true);

  const pathname = usePathname();

  //for first time mounting, check if loggedIn or not
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);
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
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
    if (pathname === "/login" || pathname === "/signup") {
      setShowCart(false);
      setShowCartIcon(false);
    } else {
      setShowCartIcon(true);
    }
  }, [pathname]);

  return (
    <nav>
      <div className="w-full fixed flex flex-col md:flex-row justify-center md:justify-between items-center  py-2 shadow-md top-0 z-50 bg-gradient-to-r from-cyan-100 to-pink-200 opacity-95 dark:bg-gradient-to-r dark:from-cyan-950 dark:via-violet-950 dark:to-purple-950 dark:shadow-cyan-700">
        <div className="logo mx-1">
          <Link href="/">
            <Image
              src="/fitlogo3-removebg-preview.png"
              alt="FitWear Logo"
              width={160}
              height={40}
              style={{ height: "4rem", width: "4rem" }}
            />
          </Link>
        </div>
        <div>
          <ul className="flex items-center space-x-4 font-bold md:text-l my-3 md:my-0 ">
            <Link href="/tshirts">
              <li className="w-max text-black dark:text-white hover:text-cyan-600">
                T-shirts
              </li>
            </Link>
            <Link href="/hoodies">
              <li className="w-max text-black dark:text-white hover:text-yellow-400">
                Hoodies
              </li>
            </Link>
            <Link href="/mugs">
              <li className="w-max text-black dark:text-white hover:text-cyan-600">
                Mugs
              </li>
            </Link>
            <Link href="/stickers">
              <li className="w-max text-black dark:text-white hover:text-yellow-400">
                Stickers
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex">
          {showCartIcon ? (
            <button
              className="text-xl md:text-4xl absolute right-0 top-3 mx-3 text-black dark:text-white hover:text-cyan-600"
              onClick={toggleCart}
            >
              <AiOutlineShoppingCart />
            </button>
          ) : null}
          {/* conditionally render profile button */}

          <div
            onMouseOver={() => {
              pathname !== "/login" && setProfileDropDown(true);
            }}
            onMouseOut={() => {
              setProfileDropDown(false);
            }}
          >
            <span
              className={`absolute  top-3 ${
                loggedIn
                  ? "right-8 md:right-14 text-green-400"
                  : "right-10 md:right-14 text-black dark:text-white"
              } text-xl md:text-4xl hover:text-cyan-600 `}
            >
              <MdAccountCircle />
            </span>
            {!loggedIn && profileDropDown ? (
              <div className="flex items-center justify-center bg-cyan-100 dark:bg-slate-900 dark:border  absolute top-6 right-6 md:right-20 px-3 py-4 w-32 h-auto rounded-md">
                <Link href={"/login"}>
                  <button className="text-xs  px-2 py-1 sm:bg-black md:text-base text-white bg-black focus:outline-none hover:bg-cyan-600 rounded">
                    Login
                  </button>
                </Link>
              </div>
            ) : (
              // edit the dropdown here
              profileDropDown &&
              loggedIn && (
                <div className="bg-cyan-300 dark:bg-slate-900 dark:border absolute top-6 right-3 md:right-20 px-3 py-4 w-32 rounded-md">
                  <ul>
                    <Link href={"/myaccount"}>
                      <li className="my-1 text-base dark:text-white text hover:text-blue-600 hover:font-bold">
                        My Account
                      </li>
                    </Link>
                    <Link href={"/myorders"}>
                      <li className="my-1 text-base dark:text-white text hover:text-blue-600 hover:font-bold">
                        Orders
                      </li>
                    </Link>
                    <li
                      className="my-1 text-base dark:text-white cursor-pointer text hover:text-blue-600 hover:font-bold"
                      onClick={handleLogOut}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
        {showCart ? (
          <div className="overflow-y-scroll cartBar w-72 h-full fixed top-0 right-0 bg-cyan-200 dark:bg-slate-800 p-10 px-8 z-50 dark:text-slate-200">
            <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
            <ol className="list-decimal font-semibold border-b border-gray-800 dark:border-gray-200">
              {Object.keys(cart).length == 0 && (
                <div className="my-4 font-bold text-center text-sm dark:text-white">
                  Your cart is Empty!
                </div>
              )}
              {Object.keys(cart).map((k) => {
                return (
                  <li key={k}>
                    <div className="item flex">
                      <div className="w-2/3  font-semibold my-3 dark:text-white">
                        {cart[k].name}
                      </div>
                      <div className="w-1/3  flex items-center justify-center font-semibold">
                        <AiFillMinusCircle
                          className="cursor-pointer mx-1 text-lg text-black dark:text-white"
                          onClick={() => {
                            removeFromCart(
                              k,
                              1,
                              cart[k].price,
                              cart[k].name,
                              cart[k].size,
                              cart[k].variant
                            );
                          }}
                        />
                        {cart[k].qty}
                        <AiFillPlusCircle
                          className="cursor-pointer mx-1 text-lg text-black dark:text-white"
                          onClick={() => {
                            addToCart(
                              k,
                              1,
                              cart[k].price,
                              cart[k].name,
                              cart[k].size,
                              cart[k].variant
                            );
                          }}
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className="text-lg font-bold dark:text-white">
              Total: <span className="dark:text-green-600">₹</span>
              <span className="dark:text-yellow-200">{subTotal}</span>
            </div>
            <span
              className="absolute top-1.5 right-2.5 text-xl cursor-pointer text-indigo-800"
              onClick={toggleCart}
            >
              <AiFillCloseCircle />
            </span>
            <div className="flex">
              <Link href={"/checkout"}>
                <button
                  disabled={subTotal === 0 ? true : false}
                  className="flex mx-auto mt-16 text-white bg-black border-0 py-2 px-2 focus:outline-none hover:bg-black rounded text-sm items-center disabled:bg-gray-600"
                >
                  <BsFillBagCheckFill className="m-1" />
                  Checkout
                </button>
              </Link>

              <button
                disabled={subTotal === 0 ? true : false}
                className="flex mx-auto mt-16 text-white bg-black border-0 py-2 px-2 focus:outline-none hover:bg-black rounded text-sm items-center disabled:bg-gray-600"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
