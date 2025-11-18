

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DoctorsSection from "./pages/Doctor";
import ServicesSection from "./pages/Services";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointment";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";   // <-- ✅ Footer Import
import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <DoctorsSection />
      <ServicesSection />
      <Patients />
      <Appointments />
      <Contact />

        <Footer />  
    </>
  );
}

export default App;






