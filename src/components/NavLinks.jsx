import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ refMenuBtn, refNavLinks }) => {
  // Closes the open nav menu when a link is clicked
  const closeMenu = () => {
    refMenuBtn.current.classList.remove("open");
    refNavLinks.current.classList.remove("open");
  };

  return (
    <ul ref={refNavLinks} className="nav-links">
      <li>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
      </li>
      <li className="nav-dropdown">
        <p>
          Heroes <span className="down-arrow">+</span>
        </p>
        <ul className="sub-links">
          <li>
            <Link to="/heroes" onClick={closeMenu}>
              Heroes
            </Link>
          </li>
          <li>
            <Link to="/awakenings" onClick={closeMenu}>
              Awakenings
            </Link>
          </li>
          <li>
            <Link to="/skins" onClick={closeMenu}>
              Skins
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-dropdown">
        <p>
          The Forge <span className="down-arrow">+</span>
        </p>
        <ul className="sub-links">
          <li>
            <Link to="/guides/soulstones" onClick={closeMenu}>
              Soulstones
            </Link>
          </li>
          <li>
            <Link to="/guides/forge" onClick={closeMenu}>
              Forge
            </Link>
          </li>
          <li>
            <Link to="/guides/runestones" onClick={closeMenu}>
              Runestones
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-dropdown">
        <p>
          Heroes Village <span className="down-arrow">+</span>
        </p>
        <ul className="sub-links">
          <li>
            <Link to="/guides/furnace" onClick={closeMenu}>
              Furnace
            </Link>
          </li>
          <li>
            <Link to="/guides/academy" onClick={closeMenu}>
              Academy
            </Link>
          </li>
          <li>
            <Link to="/guides/workshop" onClick={closeMenu}>
              Workshop
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/credits" onClick={closeMenu}>
          Credits
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
