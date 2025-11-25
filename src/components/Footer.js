import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO + TEXT */}
        <div className="footer-col">
          <div className="footer-logo">
            <span className="logo-icon">CH</span>
            <span className="logo-text">CityHospital</span>
          </div>
          <p>
           “Caring for you with world-class medical services and compassion since 2008.”
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>Cardiology</li>
            <li>Neurology</li>
            <li>Orthopedics</li>
            <li>Pediatrics</li>
            <li>Women’s Health</li>
            <li>Surgery</li>
            <li>General Medicine</li>
            <li>Emergency Care</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact Info</h4>
          <h3>Phone Number  & Email </h3>
          <p>Karachi: +92 300 1112233</p>
          <p>Lahore: +92 301 2223344</p>
          <p>Islamabad: +92 302 3334455</p>
          <p>Email: support@cityhospital.com</p>
          <p>--- Karachi, Lahore, Islamabad ---</p>

          <div className="footer-social">
  <a
    href="https://www.facebook.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF className="social-icon" />
  </a>

  <a
    href="https://twitter.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTwitter className="social-icon" />
  </a>

  <a
    href="https://www.instagram.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram className="social-icon" />
  </a>

  <a
    href="https://www.linkedin.com/in/tanveer-ahmed-501239321/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin className="social-icon" />
  </a>
</div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 City Hospital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

