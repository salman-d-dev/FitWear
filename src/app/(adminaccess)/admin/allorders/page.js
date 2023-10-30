"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const AllOrders = () => {
  const router = useRouter();
  useEffect(()=>{
    if(!localStorage.getItem('admin-token')){
      router.push('/admin')
    }
  },[])
  return (
    <div className='min-h-screen'>
      All orders
    </div>
  )
}

export default AllOrders
