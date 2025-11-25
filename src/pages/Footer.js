import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      
      {/* TOP AREA */}
      <div className="footer-top">
        
        {/* COLUMN 1 */}
        <div className="footer-col">
          <h3>City Hospital</h3>
          <p>Your health, our priority. Providing 24/7 emergency and quality medical care.</p>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#appointment">Appointment</a>
          <a href="#contact">Contact</a>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h4>Contact Info</h4>
          <p><FaPhoneAlt /> +92 300 1112233</p>
          <p><FaEnvelope /> support@cityhospital.com</p>
          <p><FaMapMarkerAlt /> Karachi, Lahore, Islamabad</p>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            
          </div>
        </div>
      </div>

      {/* BOTTOM AREA */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} City Hospital — All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
