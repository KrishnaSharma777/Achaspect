import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Navbar/Header";
import Footer from "./Navbar/Footer";
import HomePage from "./MainPageComponent/HomePage";
import MarqueeAlert from "./Navbar/MarqeeAlert";
import Career from "./MainPageComponent/Career";
import AboutUs from "./MainPageComponent/AboutUs";
import ContactUs from "./MainPageComponent/ContactUs";
// import Test from "./MainPageComponent/Test";
import AdminPannel from "./AdminPannel";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Dashboard from "./Dashboard";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/project/:id" element={<ProjectDetail />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/admin" element={<AdminPannel />} />
                   {/* <AdminPannel /> */}

        </Routes>
        <Footer />
        {/* <Test/> */}

       
        <MarqueeAlert />
      </Router>
    </>
  );
}

export default App;
