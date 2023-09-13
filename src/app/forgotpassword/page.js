"use client"
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ForgotPass = () => {
  const router = useRouter();
  useEffect(()=>{
      if(localStorage.getItem("token")){
        router.push("/")
      }
  },[]);
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-20 w-auto rounded-full" src="/fitlogo3-removebg-preview.png" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Reset Password</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 text-center">Enter your email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>


      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
    <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Go to Login!</Link>
    </p>
  </div>
</div>
    </div>
  )
}

export default ForgotPass
