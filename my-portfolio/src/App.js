import React from "react";
import "./global.css";
import Intro from "./Intro";
import About from "./About";
import Qualification from "./Qualification";
import Skills from "./Skills";
import { useEffect } from "react";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  useEffect(() => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".vertical-navbar a");

  const onScroll = () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Left Profile Card */}
      <aside className="profile-card">
        <div>
        <h2>Abdul Rafay</h2>
        <h4>Front End Web Application Developer</h4>
        </div>

        <div>
        <img src="/profile.jpeg" alt="Profile" className="profile-image" />
        </div>

        <div>
        <p>ha7227909@gmail.com</p>
        <p>Based in Rawalpindi, Pakistan</p>
        </div>
        <div>
        <footer className="footer">
        <p>&copy; 2026 Abdul Rafay. All rights reserved.</p>
        </footer>
        </div>
        <div className="social-icons">
          <a href="https://github.com/Abdul12Rafay" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/abdul-rafay16361/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/abdul_here_123?igsh=aTEzNnlwN3cyNGw3&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/+923140159853" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        <div>
          <a href="#contact" class="hire-btn"><i class="fas fa-envelope"></i> Hire Me!</a>
        </div>
      </aside>

      {/* Middle Content */}
      <main className="main-content">
        <section id="home" className="section">
          <Intro />
        </section>

        <section id="about" className="section">
          <About />
        </section>
        
        <section id="qualification" className="section">
          <Qualification />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="services" className="section">
          <Services />
        </section>

        <section id="testimonials" className="section">
          <Testimonials />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>

      </main>

      {/* Right Vertical Navbar */}
      <nav className="vertical-navbar">
        <ul>
          <li><a href="#home"><i className="fas fa-home"></i></a></li>
          <li><a href="#about"><i className="far fa-user"></i></a></li>
          <li><a href="#qualification"><i className="fa fa-graduation-cap"></i></a></li>
          <li><a href="#skills"><i className="far fa-lightbulb"></i></a></li>
          <li><a href="#services"><i className="fa fa-cogs"></i></a></li>
          <li><a href="#testimonials"><i className="far fa-comments"></i></a></li>
          <li><a href="#projects"><i className="far fa-folder-open"></i></a></li>
          <li><a href="#contact"><i className="fas fa-phone"></i></a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
