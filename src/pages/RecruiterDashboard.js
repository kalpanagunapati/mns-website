import React, { useState } from "react";
import JobPostForm from "../components/JobPostForm";
import ApplicationList from "../components/ApplicationList";
import { Container, Typography } from "@mui/material";
import {
  Box,
  // Card,
  Grid,
  TextField,
  Button,
  // Chip,
  // Avatar,
  // IconButton,
} from '@mui/material';

import Autocomplete from '@mui/material/Autocomplete';

// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import StarIcon from '@mui/icons-material/Star';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import DescriptionIcon from '@mui/icons-material/Description';
import SearchIcon from '@mui/icons-material/Search';

import Footer from '../components/Footer/Footer';
import ResumeList from "../components/ResumesList/ResumesList";


const jobRoles = [
  'Android Developer', 'iOS Developer', 'React Native Developer', 'Flutter Developer',
  'Software Engineer', 'Web Developer', 'Backend Developer', 'Data Scientist', 'AWS Developer',
  'BackEnd Developer', 'FrontEnd Developer', 'FullStack Developer', 'Python Developer',
  'MERN Stack Developer', 'Data Entry', 'UI/UX Developer', 'Content Writer', 'BPO/Telecaller',
  'Business Analyst', 'Data Collection/Survey', 'HR/Admin', 'IT Hardware&Network Engineer',
  'QA/Test Engineer', 'Digital Marketing'
];

const indianCities = [
  'Ahmedabad', 'Bangalore', 'Chandigarh', 'Chennai', 'Coimbatore', 'Delhi', 'Hyderabad',
  'Kochi', 'Kolkata', 'Mumbai', 'Pune', 'Gurgaon', 'Jaipur', 'Lucknow', 'Noida', 'Navi Mumbai',
  'Trivandrum'
];

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
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2} justifyContent="center" mb={4}  height="100px" paddingTop="20px">
        <Grid item>
          <Autocomplete
            options={jobRoles}
            renderInput={(params) => <TextField {...params} label="Job Role" size="small" variant="outlined" />}
            sx={{ width: 200, backgroundColor: 'white' }}
          />
        </Grid>
        <Grid item>
          <Autocomplete
            options={indianCities}
            renderInput={(params) => <TextField {...params} label="City / Location" size="small" variant="outlined" />}
            sx={{ width: 200, backgroundColor: 'white' }}
          />
        </Grid>
        <Grid item>
          <Autocomplete
            options={experienceLevels}
            renderInput={(params) => <TextField {...params} label="Experience" size="small" variant="outlined" />}
            sx={{ width: 200, backgroundColor: 'white' }}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" sx={{ height: '40px', minWidth: '40px', padding: 0 }}>
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
      <ResumeList/>
      <Typography variant="h4" gutterBottom>
        Recruiter Dashboard
      </Typography>

      <JobPostForm onJobPost={handleJobPost} />
      <ApplicationList applications={applications} />
    </Container>
    <Footer/>
    </Box>
    
  );
};

export default RecruiterDashboard;
