import React, { useRef } from "react";
import { Route } from "react-router-dom";
import MobileMenuBtn from "./MobileMenuBtn";
import NavLinks from "./NavLinks";

import SideBar from "./SideBar";

const Navbar = () => {
  // Ref to the mobile menu button in the DOM
  const refMenuBtn = useRef(null);
  // Ref to the nav links element
  const refNavLinks = useRef(null);

  return (
    <nav className="navbar">
      <div className="menubar"></div>
      <div className="menubar shadowbox"></div>

      <MobileMenuBtn refMenuBtn={refMenuBtn} refNavLinks={refNavLinks} />
      <NavLinks refMenuBtn={refMenuBtn} refNavLinks={refNavLinks} />

      <Route path="/(heroes|awakenings|guides)/:guide" component={SideBar} />
    </nav>
  );
};

export default Navbar;
