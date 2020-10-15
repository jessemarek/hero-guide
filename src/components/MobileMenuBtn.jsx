import React, { useRef } from "react";

const MobileMenuBtn = ({ refNavLinks }) => {
  // Ref to the mobile menu button in the DOM
  const refMenuBtn = useRef(null);

  // Toggles the mobile menu button and nav links open/closed
  const toggleOpen = () => {
    refMenuBtn.current.classList.toggle("open");
    refNavLinks.current.classList.toggle("open");
  };

  return (
    <div
      ref={refMenuBtn}
      id="mobile-nav-btn"
      className="mobile-menu-btn"
      onClick={toggleOpen}
    >
      <span className="btn-bar"></span>
      <span className="btn-bar"></span>
      <span className="btn-bar"></span>
      <span className="btn-bar"></span>
      <span className="btn-bar"></span>
      <span className="btn-bar"></span>
    </div>
  );
};

export default MobileMenuBtn;
