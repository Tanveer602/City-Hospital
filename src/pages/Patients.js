import React from "react";
import { FaSmile, FaHeart, FaUserCheck, FaStar } from "react-icons/fa";


function Patients() {
  const patients = [
    {
      icon: <FaSmile />,
      title: "Happy Patients",
      desc: "Over 10,000+ satisfied patients have trusted City Hospital for their care.",
    },
    {
      icon: <FaHeart />,
      title: "Quality Care",
      desc: "We provide compassionate, personalized, and professional medical care.",
    },
    {
      icon: <FaUserCheck />,
      title: "Trusted Doctors",
      desc: "Our qualified and experienced doctors ensure accurate diagnosis and treatment.",
    },
    {
      icon: <FaStar />,
      title: "5-Star Rating",
      desc: "Recognized as one of the top healthcare centers with outstanding patient satisfaction.",
    },
  ];

  return (
    <section id="patients" className="patients-section">
      <h2>
        Our <span>Patients</span>
      </h2>
      <h4 className="section-desc">
        At City Hospital, patient well-being is our top priority. Here’s what makes our patients smile.
      </h4>

      <div className="patients-grid">
        {patients.map((item, index) => (
          <div className="patient-card" key={index}>
            <div className="patient-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Patients;

