import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import JobApplicantDashboard from "./pages/JobApplicantDashboard";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Jobs from "./pages/Jobs"
import Training from "./pages/Training"
import { useEffect } from "react";

// Custom wrapper to conditionally render Navbar based on route
function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/services']; // Add more routes if needed

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruiter" element={<RecruiterDashboard />} />
        <Route path="/applicant" element={<JobApplicantDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/training" element={<Training/>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
