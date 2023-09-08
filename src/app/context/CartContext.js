"use client";

import {createContext, useState} from 'react';
import {toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({children})=> {

    const [cart, setCart] = useState({});
    const [subTotal, setSubTotal] = useState(0);

    const saveCart = (myCart) =>{
      localStorage.setItem("cart",JSON.stringify(myCart))
      let subt = 0;
      let keys = Object.keys(myCart);
      for (let i=0; i<keys.length; i++){
        subt += myCart[keys[i]].price * myCart[keys[i]].qty
      }
      setSubTotal(subt)
    }
    
    const clearCart = () =>{
      setCart({})
      saveCart({})
      console.log("Cart cleared!")
    }

    const addToCart = (itemCode, qty, price, name, size, variant) =>{
        let newCart = cart;
        if(itemCode in cart){
            newCart[itemCode].qty = cart[itemCode].qty + qty
        } else {
            newCart[itemCode] = {qty:1, price, name, size, variant}
        }
        setCart(newCart)
        saveCart(newCart)
        //show toast
      toast.success('Added to Cart!', {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    const removeFromCart = (itemCode, qty, price, name, size, variant) =>{
        let newCart = cart;
        if(itemCode in cart){
            newCart[itemCode].qty = cart[itemCode].qty - qty
        }
        if(newCart[itemCode]["qty"]<=0){
          delete newCart[itemCode]
        }
        setCart(newCart)
        saveCart(newCart)
        //show toast
      toast.success('Item removed!', {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }


  return (
    <CartContext.Provider value={({cart, setCart, subTotal, saveCart, clearCart, addToCart, removeFromCart, })}>{children}</CartContext.Provider>
  )
}

