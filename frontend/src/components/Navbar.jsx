import React, { useState } from "react";
import Button from "./Button";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  console.log("This is navbar");

  return (
    <header>
      <div className="logo">FireGuard</div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav>
        <ul className={menuOpen ? "show" : ""}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
          <li>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
