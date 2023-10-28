'use client';
import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
var Footer = function () {
    return (<Box sx={{ pt: 6, textAlign: "center" }}>
      <Typography>
        © 2023 All rights reserved by{" "}
        <Link href="/">
          Fit-Wear.com
        </Link>{" "}
      </Typography>
    </Box>);
};
export default Footer;
