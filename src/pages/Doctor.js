import React from "react";


function DoctorsSection() {
  return (
    <section id="doctors" className="doctors-section">
      <h2>
        Our <span>Doctors</span>
      </h2>
      <h4 className="section-desc">
        Meet our expert medical professionals dedicated to your care.
      </h4>

      <div className="doctor-grid">
        <div className="doctor-card">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
            alt="Doctor"
          />
          <h3>Dr. Ali Hamza</h3>
          <p>Neurologist</p>
          <h6>12+ years</h6>
        </div>

        <div className="doctor-card">
          <img
            src="https://media.istockphoto.com/id/1806608544/photo/portrait-of-a-female-doctor-at-the-workplace.jpg?s=612x612&w=0&k=20&c=MARkttlfJ1JoAxKffrmXxbI_rIPJTKWaKTrFv1qwCZc="
            alt="Doctor"
          />
          <h3>Dr. Sara Malik </h3>
          <p>Cardiologist</p>
          <h6>7+ years</h6>
        </div>

        <div className="doctor-card">
          <img
            src="https://t3.ftcdn.net/jpg/11/64/08/74/240_F_1164087499_TATOd1mldEH66BGVrdvBASb9crLXReQc.jpg"
            alt="Doctor"
          />
          <h3>Dr. Hiba Malik</h3>
          <p>Pediatrician</p>
          <h6>9+ years</h6>
        </div>

        <div className="doctor-card">
          <img
            src="https://images.unsplash.com/photo-1712215544003-af10130f8eb3?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
            alt="Doctor"
          />
          <h3>Dr. Ahmed Ali</h3>
          <p>Orthopedic </p>
          <h6>6+ years</h6>
        </div>
      </div>
    </section>
  );
}

export default DoctorsSection;






