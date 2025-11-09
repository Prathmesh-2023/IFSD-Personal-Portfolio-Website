// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer style={{ padding: "1rem", background: "#f0f0f0", textAlign: "center" }}>
      © {new Date().getFullYear()} My Portfolio. All rights reserved.
    </footer>
  );
};

export default Footer;
