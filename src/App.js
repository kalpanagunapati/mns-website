import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import JobApplicantDashboard from "./pages/JobApplicantDashboard";
// import Register from "./pages/Register"
import RegisterPage from "./pages/RegisterPage";
// import AboutUs from "./pages/AboutUs";
// import Services from "./pages/Services";
// import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/recruiter" element={<RecruiterDashboard />} />
        <Route path="/applicant" element={<JobApplicantDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />

        {/* <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
