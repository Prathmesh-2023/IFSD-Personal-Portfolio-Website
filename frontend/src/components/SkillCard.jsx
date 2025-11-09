// src/components/SkillCard.jsx
import React from "react";

const SkillCard = ({ skill, color }) => (
  <div style={{
    padding: "1rem",
    borderRadius: "8px",
    background: color || "#eee",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  }}>
    {skill}
  </div>
);

export default SkillCard;
