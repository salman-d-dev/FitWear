"use client"
import {toast } from "react-toastify";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Hourglass } from "react-loader-spinner";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [buttonDisabled, setButtonDisabled] = useState(false)

    const router = useRouter();
    const handleAdminLogin = async(e)=>{
        e.preventDefault();
        //disable and enable the login button
        setButtonDisabled(true)
        setTimeout(() => {
            setButtonDisabled(false)
        }, 4000);
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email,password }),
      });
      if(response.status===200){
        const parsedResponse = await response.json();
        localStorage.setItem('admin-token', parsedResponse["admin-token"])
        router.push("/admin/dashboard")
        
      } else if(response.status===404){
        toast.error('No an admin!', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      } else if(response.status===401){
        toast.error('Incorrect password!', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      } else{
        toast.error('Unable to login, please try again!', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }
    }
  return (
    <div className="min-h-screen ">
      <h1 className=" text-center text-2xl font-bold my-4">Admin Login</h1>
      <div>
        <form onSubmit={handleAdminLogin} className="text-center flex flex-col justify-center items-center p-5 md:px-40">
            <label htmlFor="email" className="font-semibold">Enter email</label>
            <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" className="p-2 rounded-lg w-full border-2 border-teal-200 mt-2 mb-4"/>
            <label htmlFor="password" className="font-semibold mt-4">Enter Pasword</label>
            <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder="Password" className="p-2 rounded-lg w-full border-2 border-teal-200 mt-2 mb-4"/>
            <button type="submit" className="bg-teal-400 hover:bg-teal-500 font-semibold min-h-[50px] min-w-[100px] rounded-lg disabled:bg-teal-100 flex justify-center items-center" disabled={buttonDisabled || !email || !password}>{buttonDisabled?<Hourglass colors={["black"]} height={20} width={20}/>:"Login"}</button>
        </form>
      </div>
    </div>
  )
}

export default Login
