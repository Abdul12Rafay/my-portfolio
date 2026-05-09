import React from "react";
import "./global.css";

function Projects() {
  const projects = [
    {
      title: "Age Calculator",
      description: "Interactive tool to calculate age in years, months, and days. Built with React and styled with CSS for a sleek user experience.",
      year: "2023"
    },
    {
      title: "E-Commerce Concept",
      description: "Mock online store with product listings and shopping cart. Designed with a modern UI and responsive layout.",
      year: "2025"
    },

    
  ];

  return (
    <section id="projects" className="section-header-projects">
      <h2 className="section-header">
        <i className="fas fa-folder-open"></i> PROJECTS
      </h2>
      <h2 className="Project-Open">Projects I have Worked On</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <h4>{project.year}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
