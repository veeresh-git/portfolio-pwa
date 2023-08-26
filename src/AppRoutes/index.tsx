import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes