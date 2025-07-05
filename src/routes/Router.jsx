import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "../pages/About";
import VisualArt from "../pages/VisualArt";
import LunaLedger from "../pages/LunaLedger";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/visualart" element={<VisualArt />} />
      <Route path="lunaledger" element={<LunaLedger />} />
    </Routes>
  );
};

export default Router;
