// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      {/* public */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* protected */}
      <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
      <Route path="/projects" element={<ProtectedRoute><Projects/></ProtectedRoute>} />
      <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>} />
      <Route path="/contact" element={<ProtectedRoute><Contact/></ProtectedRoute>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;
