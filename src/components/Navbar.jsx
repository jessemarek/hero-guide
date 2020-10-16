import React, { useRef } from "react";
import { Route } from "react-router-dom";
import MobileMenuBtn from "./MobileMenuBtn";
import NavLinks from "./NavLinks";

import SideBar from "./SideBar";

const Navbar = ({ setDarkMode }) => {
  // Ref to the mobile menu button in the DOM
  const refMenuBtn = useRef(null);
  // Ref to the nav links element
  const refNavLinks = useRef(null);

  const toggleDarkMode = () => {
    // get the current value out of local storage
    const curValue = JSON.parse(window.localStorage.getItem("dark-mode"));
    // set the opposite of the current value in local storage
    window.localStorage.setItem("dark-mode", JSON.stringify(!curValue));
    // set the opposite of current value into state
    setDarkMode(!curValue);
  };

  return (
    <nav className="navbar">
      <div className="menubar"></div>
      <div className="menubar shadowbox"></div>

      <MobileMenuBtn refMenuBtn={refMenuBtn} refNavLinks={refNavLinks} />
      <NavLinks refMenuBtn={refMenuBtn} refNavLinks={refNavLinks} />

      <Route path="/(heroes|awakenings|guides)/:guide" component={SideBar} />

      <button
        style={{
          position: "fixed",
          top: "10px",
          right: "50px",
          zIndex: "1000",
        }}
        onClick={toggleDarkMode}
      >
        Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;
