"use client"
import { useRouter } from 'next/navigation';
import Form from '../dashboard/ui-components/Form'
import { useEffect } from 'react';

const AddProduct = () => {
  const router = useRouter();
  useEffect(()=>{
    if(!localStorage.getItem('admin-token')){
      router.push('/admin')
    }
  },[])
  return (
    <div className='min-h-screen'>
      
      <Form/>
    </div>
  )
}

export default AddProduct
