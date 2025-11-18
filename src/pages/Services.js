import React from "react";
import {
  FaHeartbeat,
  FaStethoscope,
  FaUserMd,
  FaAmbulance,
  FaFlask,
  FaHospital,
  FaBrain,
  FaBaby,
  FaFemale,
  FaBone,
} from "react-icons/fa";


function ServicesSection() {
  const services = [
    {
      icon: <FaHeartbeat />,
      title: "Cardiology",
      desc: "Our experienced Cardiologists and Cardiac Surgeons specialize in diagnosing and treating all types of heart conditions, ensuring your heart stays healthy and strong.",
    },
    {
      icon: <FaBone />,
      title: "Orthopedic Care",
      desc: "Our expert Orthopedic Surgeons provide advanced treatment for bone, joint, and spine disorders — from fractures to joint replacements.",
    },
    {
      icon: <FaBaby />,
      title: "Pediatrics",
      desc: "Our caring Pediatricians are dedicated to the health and wellbeing of children, offering complete medical care from infancy through adolescence.",
    },
    {
      icon: <FaFemale />,
      title: "Women’s Health",
      desc: "Our Gynecology and Obstetrics Department provides comprehensive care for women’s health, including prenatal, maternity, and reproductive wellness services.",
    },
    {
      icon: <FaBrain />,
      title: "Neurology",
      desc: "Our skilled Neurologists and Neurosurgeons offer expert diagnosis and treatment for brain, spine, and nervous system disorders.",
    },

     {
      icon: <FaUserMd />,
      title: "Surgery",
      desc: "State-of-the-art operation theaters and skilled surgeons delivering excellence in surgical care.",
    },

    {
      icon: <FaStethoscope />,
      title: "General Medicine",
      desc: "Our Internal Medicine Specialists provide personalized care for a wide range of health conditions, focusing on long-term wellness and prevention.",
    },
    {
      icon: <FaFlask />,
      title: "Laboratory",
      desc: "State-of-the-art lab tests and diagnostic facilities with precision.",
    },
    {
      icon: <FaAmbulance />,
      title: "Emergency Care",
      desc: "24/7 ambulance and emergency department for critical situations.",
    },
   
    {
      icon: <FaHospital />,
      title: "Inpatient Services",
      desc: "Comfortable and well-equipped rooms for admitted patients.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <h2>
        Our <span>Services</span>
      </h2>
      <div className="section-desc">
       <h4> We provide a wide range of medical services with advanced technology and expert doctors to ensure the best healthcare experience.</h4>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;






