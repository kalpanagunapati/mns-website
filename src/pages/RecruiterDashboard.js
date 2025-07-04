import React, { useState } from "react";
import JobPostForm from "../components/JobPostForm";
import ApplicationList from "../components/ApplicationList";
import { Container, Typography } from "@mui/material";

const RecruiterDashboard = () => {
  const [applications, setApplications] = useState([]);

  const handleJobPost = (newJob) => {
    setApplications((prev) => [...prev, newJob]);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Recruiter Dashboard
      </Typography>

      <JobPostForm onJobPost={handleJobPost} />
      <ApplicationList applications={applications} />
    </Container>
  );
};

export default RecruiterDashboard;
