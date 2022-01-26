import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <span className="nav-logo">Portfolio</span>
      {/* <span className="nav-logo2"></span> */}
      <div className={'nav-items ${isOpen && "open"}'}>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Experience</a>
        <a href="#">Contact</a>
      </div>
      <div
        className={'nav-toggle  ${isOpen && "open"}'}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
