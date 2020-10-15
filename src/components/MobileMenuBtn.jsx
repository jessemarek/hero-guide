import React from "react";

const MobileMenuBtn = ({ refMenuBtn, refNavLinks }) => {
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
