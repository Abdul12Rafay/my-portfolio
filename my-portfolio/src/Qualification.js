import React from "react";
import "./global.css";

function Qualification() {
  return (
    <section id="qualification" className="section">
      <h2 className="section-header">
        <i className="fas fa-graduation-cap"></i> QUALIFICATION & EDUCATION
      </h2>

      <div className="qualification-container">

        <div className="qualification-item">
            <h3>Matriculation in Science</h3>
            <p>502 Model College, 2019 – 2021</p>
            <p>Excelled in mathematics, physics, and computer science subjects.</p>
        </div>

        <div className="qualification-item">
            <h3>Intermediate in Computer Science</h3>
            <p>Punjab Group of Colleges, 2021 – 2023</p>
            <p>Focused on programming, database management, and web development.</p>
        </div>

        <div className="qualification-item">
            <h3>Bachelor of Science in Software Engineering</h3>
            <p>University of XYZ, 2023 – 2027</p>
            <p>Currently pursuing a degree in software engineering with a focus on front-end development and user experience design.</p>  
        </div>

        <div className="qualification-item">
          <h3>Certifications</h3>
          <ul>
            <li>React.js Advanced Development – Online Bootcamp</li>
            <li>Responsive Web Design – FreeCodeCamp</li>
            <li>Git & GitHub Essentials – Coursera</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
