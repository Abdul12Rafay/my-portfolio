import React from "react";
import "./global.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    image: image1, // replace with your actual image
    quote:
      "This portfolio is sleek and professional. The attention to detail is impressive!"
  },
  {
    name: "Michael Lee",
    role: "Software Engineer",
    image: image2, // replace with your actual image
    quote:
      "Working with this developer was a fantastic experience. Highly recommended!"
  },
  {
    name: "Emily Davis",
    role: "Marketing Specialist",
    image: image3, // replace with your actual image
    quote:
      "Creative, reliable, and always delivers on time. A pleasure to collaborate with."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <h2 className="section-header-testimonials">
        <i className="fas fa-comments"></i> Reviews from Clients
      </h2>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.image} alt={t.name} />
            <h3>{t.name}</h3>
            <span className="role">{t.role}</span>
            <p className="quote">"{t.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
