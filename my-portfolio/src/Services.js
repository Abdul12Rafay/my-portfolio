import React from "react";
import "./global.css";

function Services() {
  return (
    <section id="services" className="section">
      <h2 className="section-header-services">
        <i className="fas fa-cogs"></i> SERVICES
      </h2>

      <div className="services-grid">
        <div className="service-item">
          <i className="fas fa-code"></i>
          <h3>Web Application Development</h3>
          <p>Building responsive, user-friendly web apps with React, Node.js, and modern frameworks.</p>
        </div>

        <div className="service-item">
          <i className="fas fa-pencil-ruler"></i>
          <h3>UI/UX Design</h3>
          <p>Crafting intuitive interfaces with glowing aesthetics, consistent typography, and professional layouts.</p>
        </div>

        <div className="service-item">
          <i className="fas fa-mobile-alt"></i>
          <h3>Responsive Design</h3>
          <p>Ensuring seamless experiences across desktop, tablet, and mobile devices.</p>
        </div>

        <div className="service-item">
          <i className="fas fa-database"></i>
          <h3>Database Management</h3>
          <p>Designing and managing SQL databases with secure, scalable structures.</p>
        </div>

        <div className="service-item">
          <i className="fas fa-code"></i>
          <h3>Code Integration</h3>
          <p>Seamlessly integrating code from various sources to create a unified application.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
