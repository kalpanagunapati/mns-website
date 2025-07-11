import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, useTheme, useMediaQuery } from '@mui/material';
import Footer from '../../components/Footer/Footer';

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      <Container sx={{ mt: 10, mb: 5 }}>
        {/* Hero Section */}
        <Box
          sx={{
            background: 'linear-gradient(to right, #00bcd4, #ab47bc)',
            borderRadius: 4,
            p: { xs: 3, sm: 4 },
            color: 'white',
            textAlign: 'center',
            mb: 5,
          }}
        >
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            fontWeight="bold"
            gutterBottom
          >
            Welcome to MNS Solutions
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: { xs: 16, sm: 18 } }}>
            Empowering Students and Recruiters with Jobs, Training & Career Assistance
          </Typography>
        </Box>

        {/* About Section */}
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Who We Are
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: { xs: 14, sm: 16 } }}>
          MNS is a modern job-tech platform dedicated to bridging the gap between fresh talent and top industry opportunities. 
          We focus on delivering value to both students and recruiters by providing a unified space for job postings, 
          candidate screening, and professional training.
        </Typography>

        {/* Image Section */}
        <Box my={4} display="flex" justifyContent="center" flexDirection="column" alignItems="center">
          <img
            src="https://img.freepik.com/free-vector/job-hunt-concept-illustration_114360-4991.jpg"
            alt="About us"
            style={{
              width: '100%',
              maxWidth: 600,
              borderRadius: 16,
              height: 'auto',
            }}
          />
        </Box>

        {/* Services Section */}
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: 'Job Posting',
              desc: 'We provide an easy-to-use platform for recruiters to post jobs and connect with qualified candidates across India.',
            },
            {
              title: 'Job Assistance',
              desc: 'Our platform supports students in finding the right job by matching them with openings based on skills, location, and experience.',
            },
            {
              title: 'Student Training',
              desc: 'We offer curated training programs in technologies like Python, MERN Stack, and more to help students become industry-ready.',
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: 4, height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {service.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Benefits Section */}
        <Box mt={6}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Why Choose MNS?
          </Typography>
          <Box
            component="ul"
            sx={{
              pl: 3,
              fontSize: { xs: 14, sm: 16 },
              lineHeight: 2,
              listStyleType: 'none',
              '& li::before': {
                content: '"✅"',
                color: 'green',
                marginRight: '8px',
              },
            }}
          >
            <li>One-stop platform for students and companies</li>
            <li>Real-time job updates and application tracking</li>
            <li>Verified recruiters and job listings</li>
            <li>Skill-based training and career counseling</li>
            <li>Dedicated support for job seekers</li>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default AboutUs;
