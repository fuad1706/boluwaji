import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "../pages/About";
import DigitalArt from "../pages/DigitalArt";
import VisualArt from "../pages/VisualArt";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/visualart" element={<VisualArt />} />
      <Route path="digitalart" element={<DigitalArt />} />
    </Routes>
  );
};

export default Router;
