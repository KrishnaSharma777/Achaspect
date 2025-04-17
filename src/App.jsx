import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Navbar/Header";
import Footer from "./Navbar/Footer";
import HomePage from "./MainPageComponent/HomePage";
import MarqueeAlert from "./Navbar/MarqeeAlert";
import Career from "./MainPageComponent/Career";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
        <MarqueeAlert />
      </Router>
    </>
  );
}

export default App;
