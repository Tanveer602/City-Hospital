import React, { useState } from "react";

function Appointment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ EXACT MESSAGE YOU WANT
    setSuccessMessage(
      "✅ Appointment request submitted successfully! We'll contact you shortly."
    );

    // ✅ Hide after 5 seconds
    setTimeout(() => setSuccessMessage(""), 9000);

    // Clear inputs
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setService("");
  };

  return (
    <section id="appointments" className="appointment-section">
      <h2 className="appointment-title">Book <span>Appointment</span></h2>
      <p className="section-desc">
        Get expert medical care by booking an appointment with our specialist doctors.
      </p>

      <form className="appointment-form" onSubmit={handleSubmit}>

        {/* ✅ SUCCESS MESSAGE EXACTLY ABOVE BUTTON */}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}

        {/* Row 1 */}
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="col">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="form-row">
          <div className="col">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="col">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Service */}
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value="">Select Service</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Neurology">Neurology</option>
          <option value="Emergency Care">Emergency Care</option>
          <option value="Orthopedic">Orthopedic</option>
          <option value="General Medicine">General Medicine</option>
        </select>

        <button type="submit" className="form-btn">
          Confirm Appointment
        </button>
      </form>
    </section>
  );
}

export default Appointment;







