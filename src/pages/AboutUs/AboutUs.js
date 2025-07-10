import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import Footer from '../../components/Footer/Footer';

const AboutUs = () => {
  return (
    <Box>
    <Container sx={{ mt: 5, mb: 5 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(to right, #00bcd4, #ab47bc)',
          borderRadius: 4,
          p: 4,
          color: 'white',
          textAlign: 'center',
          mb: 5
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to MNS Solutions
        </Typography>
        <Typography variant="h6">
          Empowering Students and Recruiters with Jobs, Training & Career Assistance
        </Typography>
      </Box>

      {/* About Us */}
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Who We Are
      </Typography>
      <Typography variant="body1" paragraph>
        MNS is a modern job-tech platform dedicated to bridging the gap between fresh talent and top industry opportunities. 
        We focus on delivering value to both students and recruiters by providing a unified space for job postings, 
        candidate screening, and professional training.
      </Typography>

      {/* Image Section */}
      <Box my={4} display="flex" justifyContent="center">
        <img
          src="https://img.freepik.com/free-vector/job-hunt-concept-illustration_114360-4991.jpg"
          alt="About us"
          style={{ width: '100%', maxWidth: 600, borderRadius: 16 }}
        />
      </Box>

      {/* Services Section */}
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Our Services
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Job Posting</Typography>
              <Typography variant="body2">
                We provide an easy-to-use platform for recruiters to post jobs and connect with qualified candidates across India.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Job Assistance</Typography>
              <Typography variant="body2">
                Our platform supports students in finding the right job by matching them with openings based on skills, location, and experience.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Student Training</Typography>
              <Typography variant="body2">
                We offer curated training programs in technologies like Python, MERN Stack, and more to help students become industry-ready.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Benefits */}
      <Box mt={6}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Why Choose MNS?
        </Typography>
        <ul>
          <li>✅ One-stop platform for students and companies</li>
          <li>✅ Real-time job updates and application tracking</li>
          <li>✅ Verified recruiters and job listings</li>
          <li>✅ Skill-based training and career counseling</li>
          <li>✅ Dedicated support for job seekers</li>
        </ul>
      </Box>
    </Container>
    <Footer/>
    </Box>
  );
};

export default AboutUs;
