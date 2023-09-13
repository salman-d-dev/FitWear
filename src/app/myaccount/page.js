"use client"
import {useEffect} from 'react'
import { useRouter } from 'next/navigation';
const MyAccount = () => {

    const router = useRouter();
    useEffect(()=>{
        if(!localStorage.getItem("token")){
          router.push("/login")
        }
    },[]);
  return (
    <div>
      My account is here
    </div>
  )
}

export default MyAccount
