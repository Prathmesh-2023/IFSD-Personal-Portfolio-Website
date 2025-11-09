import React from "react";
import "../styles/global.css";
import profileImg from "../assets/profile.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="profile-img">
          <img src={profileImg} alt="Profile" />
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hi! I’m <strong>Prathmesh</strong>, a passionate AI & ML enthusiast,
            Full Stack Developer, and Researcher. I love building innovative solutions
            that bridge technology and real-world applications.
          </p>

          <h2>What I Do</h2>
          <ul>
            <li>
              <strong>AI & ML:</strong> Developed predictive models, deep learning
              architectures, and NLP solutions. Projects include fake review detection
              and sugarcane leaf disease classification.
            </li>
            <li>
              <strong>Full Stack Development:</strong> Built responsive web
              applications using React, Node.js, and modern web technologies.
            </li>
            <li>
              <strong>Research & Innovation:</strong> Hands-on experience in deepfake
              detection, NLP, and intelligent systems.
            </li>
          </ul>

          <h2>Achievements & Experience</h2>
          <ul>
            <li>Developed AI models achieving up to <strong>93% accuracy</strong>.</li>
            <li>Completed a <strong>Web Development internship</strong> at TNMZ Media Pvt. Ltd.</li>
            <li>Active in research on <strong>fake review detection using deep learning</strong>.</li>
          </ul>

          <h2>Fun Fact</h2>
          <p>
            When I’m not coding, I love exploring tech trends, experimenting with web apps, and diving into music and creative design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
