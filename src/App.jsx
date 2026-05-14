import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Navbar/Header";
import Footer from "./Navbar/Footer";
import HomePage from "./MainPageComponent/HomePage";
import MarqueeAlert from "./Navbar/MarqeeAlert";
import Career from "./MainPageComponent/Career";
import AboutUs from "./MainPageComponent/AboutUs";
import ContactUs from "./MainPageComponent/ContactUs";
import AdminPannel from "./AdminPannel";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import ProtectedRoute from "./MainPageComponent/ProtectedRoute";
import Login from "./MainPageComponent/Login";

import DashboardLayout from "./dashboard/DashboardLayout";
import DashboardHome from "./dashboard/DashboadHome";
import ProjectManager from "./dashboard/ProjectManager";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Panel */}
        {/* <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPannel />
            </ProtectedRoute>
          }
        /> */}

        {/* Professional Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="projects" element={<ProjectManager />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>

      <Footer />
      <MarqueeAlert />
    </Router>
  );
}

export default App;