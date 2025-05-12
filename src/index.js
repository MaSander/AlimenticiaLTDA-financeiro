import React from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/header";
import Footer from "./components/footer";

import Favicon from "./assets/Favicon.svg";

import "./assets/subpage.css";
import "./index.css";

import FinancialPage from "./pages/financial";

import NotFoundPage from "./pages/notFound";

import { HashRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <title>Alimenticia senai hackathon</title>
    <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
    <Header id="header" />
    <Routes>
      <Route path="/" element={<FinancialPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer id="footer" />
  </HashRouter>,
);
