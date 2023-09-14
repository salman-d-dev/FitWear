"use client";

import {createContext, useState} from 'react';
import {toast } from "react-toastify";
import { useRouter } from 'next/navigation';

export const GlobalContext = createContext();

export const GlobalProvider = ({children})=> {

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

    // navbar

    const [showCart, setShowCart] = useState(false);
    const toggleCart = () => {
      setShowCart(!showCart)
    };
    const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  const handleLogOut = ()=>{
    setLoggedIn(false);
    localStorage.removeItem("token");
    //show toast
    toast.success("Logged out successfully!", {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      router.push("/login");
  }

    const [profileDropDown, setProfileDropDown] = useState(false)


    //login page
    
    const host = "http://localhost:3000";

    const [user, setUser] = useState({name:"", email:"",password:"",cpassword:""});


    const handleDataChange = (e)=>{
      e.preventDefault();
      setUser({...user, [e.target.name]:e.target.value})
    }

    const handleLoginSubmit = async(e)=>{
      e.preventDefault();
      const response = await fetch(`${host}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email:user.email, password:user.password }),
      });
      if(response.status === 201){
        const parsedRes = await response.json();
        //show toast
        toast.success('Logged in successfully!', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          localStorage.setItem("token",parsedRes.token)
          setLoggedIn(true)
          
          router.push("/")
          
      }  else if(response.status === 404){
        //show toast
        toast.warn("User not found! Please sign up!", {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else if(response.status === 407){
          //show toast
        toast.error("Incorrect password!", {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
      } else {
          //show toast
          toast.warn("Unable to login. Please try again later.", {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
      }
    }

    //signup page
  const passMatch = user.password === user.cpassword;
  const handleSignupSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch(`${host}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name:user.name, email:user.email, password:user.password }),
    });
    const fetchedRes = await response.json();
    if(response.status === 201){
      //show toast
      toast.success('Signed up successfully! Please login!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        router.push("/login");
        
    }  else if(response.status === 401){
      //show toast
      toast.error("Email taken already! Please login!", {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
        //show toast
      toast.warn("Unable to sign up! Please try again later!", {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    }
    console.log(fetchedRes)
  }

  //product slug page

  const [pin, setPin] = useState("");
  const [serviceable, setServiceable] = useState(false)
  const [gotProduct, setGotProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);


  return (
    <GlobalContext.Provider value={({cart, setCart, subTotal, saveCart, clearCart, addToCart, removeFromCart, loggedIn, setLoggedIn, handleLoginSubmit,handleDataChange ,handleLogOut, passMatch, handleSignupSubmit, user, showCart, setShowCart, toggleCart, profileDropDown, setProfileDropDown, pin, setPin, gotProduct, setGotProduct, selectedColor, setSelectedColor,availableSizes, setAvailableSizes,selectedSize, setSelectedSize, serviceable, setServiceable })}>{children}</GlobalContext.Provider>
  )
}

