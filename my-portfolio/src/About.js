import React from "react";
import "./global.css"; // import the single global stylesheet

const About = () => {
  return (
    
    <section id="about" className="about">
      <div class="section-header">
      <i class="fa fa-user"></i>
      <span>About</span>
      </div>
      <h1>About Me</h1>
      <p className="second">who am I and what I do?</p>
      <p>I'm Abdul Rafay, a passionate Front End Web Application Developer based in Rawalpindi, Pakistan doing my Bachelor's of Science in Software Engineering from <b>Virtual University of Pakistan</b>. With a strong foundation in HTML, CSS, JavaScript, React, Laravel, Node.js, GitHub, and SQL, I specialize in creating responsive and user-friendly web applications. I am dedicated to crafting digital experiences that are not only visually appealing but also highly functional and accessible. My goal is to bring innovative ideas to life through clean code and thoughtful design.</p>
    </section>
  );
};

export default About;