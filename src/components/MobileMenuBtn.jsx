import React, { useRef } from "react";

const MobileMenuBtn = () => {
  const refMenuBtn = useRef(null);

  const toggleOpen = () => {
    refMenuBtn.current.classList.toggle("open");
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
