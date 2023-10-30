"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ViewProducts = () => {
  const router = useRouter();
  useEffect(()=>{
    if(!localStorage.getItem('admin-token')){
      router.push('/admin')
    }
  },[])
  return (
    <div>
      All produ
    </div>
  )
}

export default ViewProducts
