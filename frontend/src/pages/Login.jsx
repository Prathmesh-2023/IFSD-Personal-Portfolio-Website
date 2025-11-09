// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";
import "../styles/global.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/auth/login", form); // expects {name,email,token}
      const data = res.data;
      if (data?.token) {
        login(data);
        navigate("/"); // go to Home (protected)
      } else {
        alert(data?.message || "Login failed");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <motion.div className="auth-card glass" initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }}>
        <h2>Welcome back</h2>
        <p className="muted">Login to view the portfolio</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Email" required value={form.email} onChange={handleChange}/>
          <input name="password" type="password" placeholder="Password" required value={form.password} onChange={handleChange}/>
          <button type="submit" className="btn" disabled={loading}>{loading ? "Signing in..." : "Sign in"}</button>
        </form>

        <p className="muted">New here? <Link to="/signup">Create an account</Link></p>
      </motion.div>
    </div>
  );
};

export default Login;
