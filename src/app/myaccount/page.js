"use client"
import {useEffect,useContext, useState} from 'react'
import { useRouter } from 'next/navigation';
import { GlobalContext } from '../context/GlobalContext';
import {AiOutlineEdit} from 'react-icons/ai';
import UserProfile from '../components/UserProfile';


const MyAccount = () => {
    

    
    const {loggedInUser, getUser, name, setName, email, setEmail,  phone, setPhone,pin,setPin,address, setAddress,city, setCity,state, setState, fetchCityState, updateUser, editMode, setEditMode, router} = useContext(GlobalContext);

    useEffect(()=>{
        if(!localStorage.getItem("token")){
          router.push("/login")
        }
        const fetchUserData = async()=>{
          const data = await getUser();
          if(data){
            console.log(data)
            if(data.name){
              setName(data.name)
            }
            if(data.email){
              setEmail(data.email)
            }
            if(data.phone){
              setPhone(data.phone)
            }
            if(data.address){
              setAddress(data.address)
            }
        }
        }
        fetchUserData();
        console.log(router.pathname);
    },[]);

    useEffect(() => {
      fetchCityState();
    }, [pin]);

      //for email validation
  function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  }

  //form validation
  const errorsExist = ()=>{
    if((name === "" || name === null || name === undefined)|| (email === "" || email === null || email === undefined)|| (address === "" || address === null || address === undefined || address.length < 5) || (phone === "" || phone === null || phone === undefined || phone.length !== 10) || (pin === "" || pin === null || pin === undefined || pin.length !== 6) || (city === "" || city === null || city === undefined) || (state === "" || state === null || state === undefined) || !isValidEmail(email)){
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className='my-8 text-center text-4xl font-bold p-4 relative'>
      <h1 className='my-4'>
        Account Info
      </h1>
      {!editMode? (
        <UserProfile/>
      ) : (<>

      <div className='text-left mt-6 text-xl px-4 flex items-center'>
        <h2>Personal (edit)</h2>
        <div className='mx-3'>
        <AiOutlineEdit/>
        </div>
      </div>
      <div className="flex justify-evenly items-center bg-slate-50 rounded-lg">
      <div className=" m-4 w-1/2">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input value={name} placeholder='Full Name' onChange={(e)=>{setName(e.target.value)}}  type="name" id="name" name="name" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:font-normal"/>
        </div>
      <div className=" m-4 w-1/2">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input value={email} readOnly={true} type="email" id="email" name="email" className="w-full  rounded border border-gray-300 bg-slate-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:font-normal"/>
        </div>

      </div>
      <div className='px-4 bg-slate-50 rounded-lg'>
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Locality</label>
        <textarea value={address} placeholder='Building / Lane / Locality' onChange={(e)=>{setAddress(e.target.value)}} id="address" name="address" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out placeholder:font-normal"></textarea>
      </div>

      <div className="flex justify-evenly items-center bg-slate-50 rounded-lg">
      <div className=" m-4 w-1/2">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
        <input value={phone} placeholder="Your 10 digit phone number" onChange={(e)=>{setPhone(e.target.value)}} type="number"  id="phone" name="phone" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:font-medium appearance-none"/>
        </div>
      <div className=" m-4 w-1/2">
      <label htmlFor="pinCode" className="leading-7 text-sm text-gray-600">Pin Code</label>
        <input value={pin} placeholder='Postal Index Number' onChange={(e)=>{setPin(e.target.value)}} type="number" id="pinCode" name="pinCode" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:font-normal"/>
        </div>

      </div>
      <div className="flex justify-evenly items-center bg-slate-50 rounded-lg">
      <div className=" m-4 w-1/2">
        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
        <input value={state} type="state" id="state" name="state" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-slate-200" readOnly={true}/>
        </div>
        
      <div className=" m-4 w-1/2">
      <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
        <input value={city} type="text" id="city" name="city" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-slate-200" readOnly={true}/>
        </div>
      </div>
        <div><button disabled={errorsExist()} onClick={()=>{updateUser(name,`${address} ${state} ${city} ${pin}`, phone); setEditMode(false)}} className="flex mx-auto mt-6 text-white bg-black border-0 py-2 px-2 focus:outline-none hover:bg-slate-800 rounded text-sm items-center disabled:bg-gray-400">Update</button></div>
      </>)}

    </div>
  )
}

export default MyAccount
