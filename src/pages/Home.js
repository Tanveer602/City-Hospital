import React from "react";


function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
         <h1>Welcome to <h1>City Hospital </h1></h1>
        <p>  Your health is our top priority. Providing trusted care with modern
          facilities and expert doctors.</p>
        <button onClick={() => document.getElementById("appointments").scrollIntoView({ behavior: "smooth" })}>
          Book Appointment
        </button>
      </div>
    </section>
  );
}

export default Home;


