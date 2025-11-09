// src/pages/Projects.jsx
import React from "react";
import ProjectCard from "../components/ProjectCard";
import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import p3 from "../assets/project3.png";
import p4 from "../assets/project4.jpg";
import { motion } from "framer-motion";
import "../styles/global.css";

const projects = [
  { title: "Fake Review Detection", description: "NLP + Deep Learning model to detect fake reviews.", tech: ["Python","PyTorch","NLP"], image: p1 },
  { title: "Sugarcane Disease Classifier", description: "CNN classifier for sugarcane leaf diseases.", tech: ["TensorFlow","CNN"], image: p2 },
  { title: "Full Stack Task Manager", description: "React + Node.js + MongoDB task app", tech: ["React","Node","MongoDB"], image: p3 },
  { title: "Weather Forecast App", description: "OpenWeather API powered app", tech: ["React","REST"], image: p4 }
];

const Projects = () => {
  return (
    <div className="page-wrap">
      <motion.h2 initial={{ y: -10, opacity: 0 }} animate={{ y:0, opacity:1 }}>Projects</motion.h2>
      <motion.div className="projects-grid" initial="hidden" animate="visible" variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } }
      }}>
        {projects.map((p, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
