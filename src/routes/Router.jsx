import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "../pages/About";
import VisualArt from "../pages/VisualArt";
import LunaLedger from "../pages/LunaLedger";
import NewsDetail from "../pages/NewsDetail";
import NewsArchives from "../pages/NewsArchives";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/visualart" element={<VisualArt />} />
      <Route path="lunaledger" element={<LunaLedger />} />
      <Route path="/news/:id" element={<NewsDetail />} />
      <Route path="/news/archives/:year/:month" element={<NewsArchives />} />
      <Route path="/news/archives" element={<NewsArchives />} />
    </Routes>
  );
};

export default Router;
