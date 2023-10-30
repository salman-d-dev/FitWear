"use client";
import { baselightTheme } from "./utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from 'next/navigation';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import { styled, Container, Box } from "@mui/material";
import React, { useState,useEffect } from "react";
import Header from "./dashboard/layout/header/Header"; 
import Sidebar from "./dashboard/layout/sidebar/Sidebar";
import Footer from "./dashboard/layout/footer/page";


var MainWrapper = styled("div")(function () { return ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}); });
var PageWrapper = styled("div")(function () { return ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}); });

export default function SubLayout(_a) {
  var children = _a.children;
  var _b = useState(true), isSidebarOpen = _b[0], setSidebarOpen = _b[1];
  var _c = useState(false), isMobileSidebarOpen = _c[0], setMobileSidebarOpen = _c[1];

  const router = useRouter();


    return (
      <ThemeProvider theme={baselightTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div>
        <MainWrapper className="mainwrapper">
      {/* ------------------------------------------- */}
      {/* Sidebar */}
      {/* ------------------------------------------- */}
      <Sidebar isSidebarOpen={isSidebarOpen} isMobileSidebarOpen={isMobileSidebarOpen} onSidebarClose={function () { return setMobileSidebarOpen(false); }}/>
      {/* ------------------------------------------- */}
      {/* Main Wrapper */}
      {/* ------------------------------------------- */}
      <PageWrapper className="page-wrapper">
        {/* ------------------------------------------- */}
        {/* Header */}
        {/* ------------------------------------------- */}
        <Header toggleMobileSidebar={function () { return setMobileSidebarOpen(true); }}/>
        {/* ------------------------------------------- */}
        {/* PageContent */}
        {/* ------------------------------------------- */}
        <Container sx={{
            paddingTop: "20px",
            maxWidth: "1200px",
        }}>

          {/* Global JSX to remove navbar and footer */}
          <style jsx global>{`
            footer{
              display:none;
            }
            nav{
              display:none;
            }
                           `}</style>

          {/* ------------------------------------------- */}
          {/* Page Route */}
          {/* ------------------------------------------- */}
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
          {/* ------------------------------------------- */}
          {/* End Page */}
          {/* ------------------------------------------- */}

          {/* ------------------------------------------- */}
          {/* Footer */}
          {/* ------------------------------------------- */}
          <Footer />
        </Container>
      </PageWrapper>
    </MainWrapper>
        </div>
      </ThemeProvider>
    );
}
