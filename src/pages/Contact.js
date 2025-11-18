import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage(
      `✅ Thank you, ${formData.name}! Your message has been sent successfully. We'll get back to you soon.`
    );

    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSuccessMessage(""), 6000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Contact <span>Us</span></h2>
        <p>We’d love to hear from you. Our team is always ready to assist you!</p>
      </div>

      <div className="contact-container">

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>Reach out to our nearest branch or send us a message directly.</p>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Karachi Branch</h4>
              <p> <span>📍</span> - Main Karachi-Centeral Road, Karachi</p>
              <p><FaPhoneAlt className="inline-icon" /> +92 300 1112233</p>
              <p><FaEnvelope className="inline-icon" /> karachi@cityhospital.com</p>
              <p>⏰   24/7 Emergency | Mon-Sun: 8AM-11.59PM</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Lahore Branch</h4>
              <p> <span>📍</span> - Gulberg III, Ferozepur Road, Lahore</p>
              <p><FaPhoneAlt className="inline-icon" /> +92 301 2223344</p>
              <p><FaEnvelope className="inline-icon" /> lahore@cityhospital.com</p>
               <p>⏰   24/7 Emergency | Mon-Sun: 8AM-11PM</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Islamabad Branch</h4>
              <p> <span>📍</span> - Blue Area, Jinnah Avenue, Islamabad</p>
              <p><FaPhoneAlt className="inline-icon" /> +92 302 3334455</p>
              <p><FaEnvelope className="inline-icon" /> islamabad@cityhospital.com</p>
               <p>⏰   24/7 Emergency | Mon-Sun: 8AM-10PM</p>
            </div>
          </div>
        </div>

        {/* ✅ FIXED: Success message moved inside form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <h3>Send Us a Message</h3>

          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="3"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;





