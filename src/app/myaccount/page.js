"use client"
import {useEffect,useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalContext';
import {AiOutlineEdit} from 'react-icons/ai';
import UserProfile from '../_components/UserProfile';


const MyAccount = () => {
    

    
    const { getUser, name, setName, email, setEmail,  phone, setPhone,address, setAddress,  fetchCityState, updateUser, editMode, setEditMode, router} = useContext(GlobalContext);

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=>{
        if(!localStorage.getItem("token")){
          router.push("/login")
        }
        const fetchUserData = async()=>{
          const data = await getUser();
          if(data){
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
            if(data.isAdmin){
              setIsAdmin(true);
            }
        }
        }
        fetchUserData();
    },[]);

    useEffect(() => {
      fetchCityState();
    }, [address.pincode]);

    useEffect(()=>{
      console.log(address);
    },[address])

      //for email validation
  function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  }

  //form validation
  const errorsExist = ()=>{
    if((name === "" || name === null || name === undefined)|| (email === "" || email === null || email === undefined)|| (address.locality === "" || address.locality === null || address.locality === undefined || address.locality.length < 5) || (phone === "" || phone === null || phone === undefined || phone.length !== 10) || (address.pincode === "" || address.pincode === null || address.pincode === undefined || address.pincode.length !== 6) || (address.city === "" || address.city === null || address.city === undefined) || (address.state === "" || address.state === null || address.state === undefined) || !isValidEmail(email)){
      return true;
    } else {
      return false;
    }
  }

  const handleAddressChange =(e)=>{
    setAddress({...address, [e.target.name]: e.target.value})
  }

  return (
    <div className=' min-h-fit sm:min-h-screen text-center text-4xl font-bold p-4 relative dark:text-white'>
      <h1 className='my-4 sm:my-2'>
        Account Info
      </h1>
      {!editMode? (
        <UserProfile isAdmin={isAdmin}/>
      ) : (<div className='dark:bg-gradient-to-tr from-[#320157] to-[#010257] dark:border border relative rounded-lg'>

      <div><button className='bg-red-600 px-2 py-1 rounded-full text-sm absolute top-2 right-2' onClick={()=>{setEditMode(false)}}>X</button></div>
      <div className='text-left mt-6 text-xl px-4 flex items-center'>
        <h2>Personal (edit)</h2>

        <div className='mx-3'>
        <AiOutlineEdit/>
        </div>
      </div>
      <div className="flex justify-evenly items-center bg-slate-50 dark:bg-gradient-to-tr from-[#320157] to-[#010257] ">
      <div className=" m-4 w-1/2">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-gray-200">Name</label>
        <input value={name} placeholder='Full Name' onChange={(e)=>{setName(e.target.value)}}  type="name" id="name" name="name" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:border dark:border-cyan-300 dark:bg-black dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:font-normal"/>
        </div>
      <div className=" m-4 w-1/2">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-200">Email</label>
        <input value={email} readOnly={true} type="email" id="email" name="email" className="w-full  rounded border border-gray-300 bg-slate-200 text-base outline-none text-gray-700 dark:border dark:border-cyan-300 dark:bg-black dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:font-normal"/>
        </div>

      </div>
      <div className='px-4 bg-slate-50 dark:bg-gradient-to-tr from-[#320157] to-[#010257] '>
        <label htmlFor="address" className="leading-7 text-sm text-gray-600 dark:text-gray-200">Locality</label>
        <textarea value={address.locality} placeholder='Building / Lane / Locality' onChange={handleAddressChange} id="address" name="locality" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 dark:border dark:border-cyan-300 dark:bg-black dark:text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out placeholder:font-normal"></textarea>
      </div>

      <div className="flex justify-evenly items-center bg-slate-50 dark:bg-gradient-to-tr from-[#320157] to-[#010257] ">
      <div className=" m-4 w-1/2">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600 dark:text-gray-200">Phone</label>
        <input value={phone} placeholder="Your 10 digit phone number" onChange={(e)=>{setPhone(e.target.value)}} type="text"  id="phone" name="phone" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:border dark:border-cyan-300 dark:bg-black dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:font-medium appearance-none"/>
        </div>
      <div className=" m-4 w-1/2">
      <label htmlFor="pinCode" className="leading-7 text-sm text-gray-600 dark:text-gray-200">Pin Code</label>
        <input value={address.pincode} placeholder='Postal Index Number' onChange={handleAddressChange} type="text" id="pinCode" name="pincode" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:border dark:border-cyan-300 dark:bg-black dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:font-normal"/>
        </div>

      </div>
      <div className="flex justify-evenly items-center bg-slate-50 dark:bg-gradient-to-tr from-[#320157] to-[#010257] ">
      <div className=" m-4 w-1/2">
        <label htmlFor="state" className="leading-7 text-sm text-gray-600 dark:text-gray-200">State</label>
        <input value={address.state} type="state" id="state" name="state" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:border dark:border-cyan-300 dark:bg-black dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-slate-200" readOnly={true}/>
        </div>
        
      <div className=" m-4 w-1/2">
      <label htmlFor="city" className="leading-7 text-sm text-gray-600 dark:text-gray-200">City</label>
        <input value={address.city} type="text" id="city" name="city" className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:border dark:border-cyan-300 dark:bg-black dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out bg-slate-200" readOnly={true}/>
        </div>
      </div>
        <div><button disabled={errorsExist()} onClick={()=>{updateUser(name,address, phone); setEditMode(false)}} className="flex mx-auto mt-6 text-white bg-black border-0 py-2 px-2 focus:outline-none hover:bg-slate-800 rounded text-sm items-center disabled:bg-gray-400 my-2 dark:hover:bg-cyan-300 dark:hover:text-black">Update</button></div>
      </div>)}

    </div>
  )
}

export default MyAccount
