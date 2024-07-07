import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "../../pages/Contact";
import About from "../../pages/About";
function Layout() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Navbar />
          <Outlet />
          <About />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
