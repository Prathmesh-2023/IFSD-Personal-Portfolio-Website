// src/components/ProjectCard.jsx
import React from "react";
import "../styles/global.css";

const ProjectCard = ({ title, description, tech = [], image }) => {
  return (
    <div className="card">
      <div className="card-media">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p className="muted">{description}</p>
        <div className="badges">
          {tech.map((t, i) => <span key={i} className="badge">{t}</span>)}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
