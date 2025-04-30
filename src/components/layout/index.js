import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarComponent from "../sidebar/index";
import Header from "../header";
import Footer from "../footer";
import "./index.css"


function Layout() {
    const [isOpen, setIsOpen] = useState(true);
  
    const handleChildData = (e) => {
      setIsOpen(!isOpen);
    };
  
    const [width, setWidth] = useState(window.innerWidth);
  
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }
  
    const isMobile = width <= 768;
  
    useEffect(() => {
      if (isMobile) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
  
      window.addEventListener("resize", handleWindowSizeChange);
  
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, [isMobile]);
  
    return (
      <div className="main__layout__div" style={{display: "flex"}}>
        <SidebarComponent props={isOpen} callBack={handleChildData} />
        <div className={isOpen ? "navbar__width" : "navbar__width__dec"}>
          <Header navbarCallBack={handleChildData} />
          <div className="body flex-grow-1 main__body__div">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
  
  export default Layout;