import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import JobApplicantDashboard from "./pages/JobApplicantDashboard";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Jobs from "./pages/Jobs"
import Training from "./pages/Training"
import CourseDetails from './pages/CourseDetails/CourseDetails.js'; 
// import { useEffect } from "react";
import ContactUs from "./pages/ContactUs/ContactUs.js";
import AboutUs from "./pages/AboutUs/AboutUs.js";

// Custom wrapper to conditionally render Navbar based on route
function AppContent() {
  // const location = useLocation();
  // const hideNavbarRoutes = ['/services']; // Add more routes if needed

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
        <Route path="/jobseeker" element={<Jobs/>} />
        <Route path="/training" element={<Training/>} />
        <Route path="/course/:title" element={<CourseDetails />}/>
        <Route path="/contact" element={<ContactUs />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
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
