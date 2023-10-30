'use client';
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import {  usePathname, useRouter } from "next/navigation";

var Footer = function () {
  const pathname = usePathname();
  const [loggedIn, setLoggedIn] = useState(true);
  const router = useRouter();
  useEffect(()=>{
    if(localStorage.getItem('admin-token')){
      setLoggedIn(true);
    }
  },[pathname]);

  const handleLogout = ()=>{
    localStorage.removeItem('admin-token');
    setLoggedIn(false);
    router.push('/admin');
  }
    return (<><Box sx={{ pt: 6, textAlign: "center" }}>
      <Typography>
        © 2023 All rights reserved by{" "}
        <Link href="/">
          Fit-Wear.com
        </Link>{" "}
      </Typography>
      {loggedIn? (
      <button className="text-lg p-2 rounded-lg mt-4 underline" onClick={handleLogout}>Logout</button>
      ) : (null)
      }
    </Box>
      </>);
};
export default Footer;
