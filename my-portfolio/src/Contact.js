import React, { useState } from "react";
import "./global.css";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-header">
        <i className="fas fa-envelope"></i> CONTACT
      </h2>

      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mlgzpjgv"
        method="POST"
        className="contact-form"
      >
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" name="name" required />
        </div>

        <div className="form-group">
          <label>Your Email</label>
          <input type="email" name="email" required />
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input type="text" name="subject" />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea name="message" rows="5" required></textarea>
        </div>

        <button type="submit" className="send-btn">Send</button>

        {status === "SUCCESS" && (
          <p className="banner success">✨ Message sent successfully!</p>
        )}
        {status === "ERROR" && (
          <p className="banner error">⚡ Failed to send message. Try again.</p>
        )}
      </form>
    </section>
  );
}

export default Contact;
