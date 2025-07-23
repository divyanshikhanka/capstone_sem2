import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Section: Logo */}
      <div className="logo">TripTailor</div>

      {/* Center Section: Links */}
      <ul className="nav-center">
        <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/explore" className={({isActive}) => isActive ? 'active' : ''}>Explore</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About Us</NavLink></li>
        <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
      </ul>

      {/* Right Section: Login/Signup */}
      <div className="nav-right">
        <NavLink to="/login" className="login-btn">Login</NavLink>
        <NavLink to="/signup" className="signup-btn">Signup</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
