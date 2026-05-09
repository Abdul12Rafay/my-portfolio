import React from "react";
import "./global.css";

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-header">
        <i className="fas fa-lightbulb"></i> SKILLS
      </h2>

      <div className="skills-grid">
        <div className="skill-item">
          <i className="fab fa-html5"></i>
          <p>HTML5</p>
        </div>
        <div className="skill-item">
          <i className="fab fa-css3-alt"></i>
          <p>CSS3</p>
        </div>
        <div className="skill-item">
          <i className="fab fa-js"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <i className="fab fa-react"></i>
          <p>React</p>
        </div>
        <div className="skill-item">
          <i className="fab fa-laravel"></i>
          <p>Laravel</p>
        </div>
        <div className="skill-item">
          <i className="fab fa-node-js"></i>
          <p>Node.js</p>
        </div>
        <div className="skill-item">
          <i className="fab fa-github"></i>
          <p>GitHub</p>
        </div>
        <div className="skill-item">
          <i className="fa-brands fa-typescript"></i>
          <p>TypeScript</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
