import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => {

    return (
        <nav className="navbar">
            <div className="menubar"></div>
            <div className="menubar shadowbox"></div>

            <div id="mobile-nav-btn" className="mobile-menu-btn">
                <div id="bar-one" className="menu-bar"></div>
                <div id="bar-two" className="menu-bar"></div>
                <div id="bar-three" className="menu-bar"></div>
            </div>

            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-dropdown">
                    <p>Heroes <span className="down-arrow">+</span></p>
                    <ul className="sub-links">
                        <li><Link to="/heroes">Heroes</Link></li>
                        <li><Link to="/awakenings">Awakenings</Link></li>
                        <li><Link to="/skins">Skins</Link></li>
                    </ul>
                </li>
                <li className="nav-dropdown">
                    <p>The Forge <span className="down-arrow">+</span></p>
                    <ul className="sub-links">
                        <li><Link to="/guides/soulstones">Soulstones</Link></li>
                        <li><Link to="/guides/forge">Forge</Link></li>
                        <li><Link to="/guides/runestones">Runestones</Link></li>
                    </ul>
                </li>
                <li className="nav-dropdown">
                    <p>Heroes Village <span className="down-arrow">+</span></p>
                    <ul className="sub-links">
                        <li><Link to="/guides/furnace">Furnace</Link></li>
                        <li><Link to="/guides/academy">Academy</Link></li>
                        <li><Link to="/guides/workshop">Workshop</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/credits">Credits</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar