import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../services/api";
import "../styles/global.css";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/auth/signup", form);
      if (res.status === 201 || res.status === 200) {
        alert("Account created! Please login.");
        navigate("/login");
      } else {
        alert(res.data?.message || "Signup failed");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <motion.div className="auth-card glass" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.45 }}>
        <h2>Create account</h2>
        <p className="muted">Join to access the portfolio</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Full name" required value={form.name} onChange={handleChange} />
          <input name="email" type="email" placeholder="Email" required value={form.email} onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" required value={form.password} onChange={handleChange} />
          <button type="submit" className="btn" disabled={loading}>{loading ? "Creating..." : "Create account"}</button>
        </form>

        <p className="muted">Already a user? <Link to="/login">Login</Link></p>
      </motion.div>
    </div>
  );
};

export default Signup;
