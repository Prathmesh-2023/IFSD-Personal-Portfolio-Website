// src/components/Hero.jsx
import React from "react";

const Hero = () => (
  <section style={{
    textAlign: "center",
    padding: "4rem 2rem",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    color: "#fff",
  }}>
    <h1>Hello! I'm a Student Developer</h1>
    <p>Passionate about AI/ML, Deep Learning, and Full Stack Development</p>
    <a href="/projects" style={{ marginTop: "1rem", display: "inline-block", padding: "0.8rem 2rem", background: "#fff", color: "#2575fc", borderRadius: "8px", fontWeight: "bold" }}>View My Work</a>
  </section>
);

export default Hero;
