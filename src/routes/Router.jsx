import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import VisualArt from "../pages/VisualArt";

const Router = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/visual" element={<VisualArt />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
