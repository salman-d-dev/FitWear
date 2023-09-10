"use client"
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";


const SignUp = () => {
  
  const context = useContext(GlobalContext)
  const {user, passMatch, handleSignupSubmit, handleDataChange} = context;
  

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-20 w-auto rounded-full" src="/fitlogo3-removebg-preview.png" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create a new account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" method="POST" onSubmit={handleSignupSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
        <div className="mt-2">
          <input onChange={handleDataChange} value={user.name} id="name" name="name" type="text" autoComplete="name" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input onChange={handleDataChange} value={user.value} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        <div className="mt-2">
          <input onChange={handleDataChange} value={user.password} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
          <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
        <div className="mt-2">
          <input onChange={handleDataChange} value={user.cpassword} id="cpassword" name="cpassword" type="password" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:text-black disabled:bg-gray-600" disabled={!passMatch}>Sign Up</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Already a member?
      <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">  Log in here!</Link>
    </p>
  </div>
</div>
    </div>
  )
}

export default SignUp
