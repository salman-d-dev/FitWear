"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);
  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto rounded-full"
          src="/fitlogo3-removebg-preview.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
          Reset Password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300 text-center"
            >
              Email Address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                required
                className="block w-full rounded-md border-0 dark:border dark:border-cyan-300 dark:bg-black dark:text-white p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 dark:bg-purple-800 dark:hover:bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:disabled:bg-gray-600 dark:disabled:hover:bg-gray-600"
              disabled={!email}
            >
              Submit
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-300">Go to 
          <Link
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {" "}Login!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPass;
