// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg"; 
import "../styles/global.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="page-wrap">
      <motion.section className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <motion.div className="hero-left" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
          <h1>Hi, I’m <span className="accent">Prathmesh</span></h1>
          <p className="lead">Aspiring AI/ML & Full Stack developer — I build ML models and web apps.</p>
          <div style={{ marginTop: 20 }}>
            <button className="btn" onClick={() => navigate("/projects")}>View My Work</button>
            <button className="btn ghost" onClick={() => navigate("/about")} style={{ marginLeft: 12 }}>About Me</button>
          </div>
        </motion.div>

        <motion.div className="hero-right" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }}>
          <img src={profile} alt="profile" className="profile-img" />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
