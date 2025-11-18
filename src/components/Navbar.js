import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      {/* ===== Left: CH Logo ===== */}
      <div className="navbar-logo" onClick={() => handleNavClick("home")}>
        <div className="logo-box">CH</div>
        <span className="logo-text">
          City<span>Hospital</span>
        </span>
      </div>

      {/* ===== Hamburger Icon (mobile) ===== */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* ===== Nav Links ===== */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <span onClick={() => handleNavClick("home")}>Home</span>
        <span onClick={() => handleNavClick("doctors")}>Doctors</span>
        <span onClick={() => handleNavClick("services")}>Services</span>
        <span onClick={() => handleNavClick("patients")}>Patients</span>
        <span onClick={() => handleNavClick("appointments")}>Appointments</span>
        <span onClick={() => handleNavClick("contact")}>Contact</span>
        
      </div>
    </nav>
  );
}

export default Navbar;













