import React, { useState } from "react";
import JobPostForm from "../components/JobPostForm";
import ApplicationList from "../components/ApplicationList";
import { Container, Typography, Box, Grid, TextField, Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "../components/Footer/Footer";
import ResumeList from "../components/ResumesList/ResumesList";

// Job options
const jobRoles = [
  'Android Developer', 'iOS Developer', 'React Native Developer', 'Flutter Developer',
  'Software Engineer', 'Web Developer', 'Backend Developer', 'Data Scientist', 'AWS Developer',
  'BackEnd Developer', 'FrontEnd Developer', 'FullStack Developer', 'Python Developer',
  'MERN Stack Developer', 'Data Entry', 'UI/UX Developer', 'Content Writer', 'BPO/Telecaller',
  'Business Analyst', 'Data Collection/Survey', 'HR/Admin', 'IT Hardware&Network Engineer',
  'QA/Test Engineer', 'Digital Marketing'
];

// Location options
const indianCities = [
  'Ahmedabad', 'Bangalore', 'Chandigarh', 'Chennai', 'Coimbatore', 'Delhi', 'Hyderabad',
  'Kochi', 'Kolkata', 'Mumbai', 'Pune', 'Gurgaon', 'Jaipur', 'Lucknow', 'Noida', 'Navi Mumbai',
  'Trivandrum'
];

// Experience options
const experienceLevels = [
  'Fresher', '1 Year Experience', '2 Years Experience', '3+ Years Experience', '5+ Years Experience'
];

const RecruiterDashboard = () => {
  const [applications, setApplications] = useState([]);

  const handleJobPost = (newJob) => {
    setApplications((prev) => [...prev, newJob]);
  };

  return (
    <Box>
      <Container sx={{ mt: 4, mb: 4 }}>
        {/* Filter Grid */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          wrap="wrap"
          mb={6}
          sx={{
            paddingY: 2,
            backgroundColor: "#f8f8f8",
            borderRadius: 2,
          }}
        >
          {/* Job Role */}
          <Grid item xs={12} sm={6} md={3}>
            <Autocomplete
              options={jobRoles}
              renderInput={(params) => <TextField {...params} label="Job Role" size="small" variant="outlined" />}
              fullWidth
              sx={{ backgroundColor: 'white' }}
            />
          </Grid>

          {/* City / Location */}
          <Grid item xs={12} sm={6} md={3}>
            <Autocomplete
              options={indianCities}
              renderInput={(params) => <TextField {...params} label="City / Location" size="small" variant="outlined" />}
              fullWidth
              sx={{ backgroundColor: 'white' }}
            />
          </Grid>

          {/* Experience */}
          <Grid item xs={12} sm={6} md={3}>
            <Autocomplete
              options={experienceLevels}
              renderInput={(params) => <TextField {...params} label="Experience" size="small" variant="outlined" />}
              fullWidth
              sx={{ backgroundColor: 'white' }}
            />
          </Grid>

          {/* Search Button */}
          <Grid item xs={12} sm={6} md={1}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                height: '40px',
                minWidth: '40px',
                padding: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <SearchIcon />
            </Button>
          </Grid>
        </Grid>

        {/* Heading */}
        <Typography variant="h4" mt={4} mb={3} align="center">
          Recruiter Dashboard
        </Typography>
        {/* Job Post Form */}
        <Box mt={5}>
          <JobPostForm onJobPost={handleJobPost} />
        </Box>

        {/* Resume List */}
        <ResumeList />

        {/* Application List */}
        <Box mt={5}>
          <ApplicationList applications={applications} />
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default RecruiterDashboard;
