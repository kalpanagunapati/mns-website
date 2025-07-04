import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import JobApplicantDashboard from "./pages/JobApplicantDashboard";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/recruiter" element={<RecruiterDashboard />} />
        <Route path="/applicant" element={<JobApplicantDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
