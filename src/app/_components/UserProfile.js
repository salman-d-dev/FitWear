"use client";
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';


const UserProfile = ({isAdmin}) => {
    const {name, address, phone, email, setEditMode} = useContext(GlobalContext);
  return (
<div className="flex items-center min-h-screen sm:h-fit w-full justify-center">

<div className="max-w-xs">
    <div className="bg-white shadow-xl rounded-lg py-3">
        <div className="photo-wrapper p-2">
            <img className="w-32 h-32 rounded-full mx-auto" src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png" alt="User"/>
        </div>
        <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{name}</h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
                <p>{isAdmin? "Admin" : "Consumer"}</p>
            </div>
            <table className="text-xs my-3">
                <tbody><tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                    <td className="px-2 py-2">{`${address.locality} ${address.city} ${address.state} ${address.pincode}`}</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td className="px-2 py-2">+91 {phone}</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">{email}</td>
                </tr>
            </tbody></table>

            <div className="text-center my-3">
                <button onClick={()=>{setEditMode(true)}} className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" >Edit</button>
            </div>

        </div>
    </div>
</div>

</div>
  )
}

export default UserProfile
