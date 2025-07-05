import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const [data, setData] = useState();
  const navigate = useNavigate(); // ✅ Moved here before usage

  const handleJobsClick = () => {
    navigate('/jobs'); // Change to your actual jobs route
  };

  const handleTrainingClick = () => {
    navigate('/training'); // Change to your actual training route
  };

  return (
    <Box sx={{ backgroundColor: '#C0C0C0', minHeight: '100vh' }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#0d47a1' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NMS Solutions
          </Typography>
          <Button color="inherit" onClick={handleJobsClick}>
            Jobs
          </Button>
          <Button color="inherit" onClick={handleTrainingClick}>
            Training
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ paddingY: 4 }}>
        <Typography variant="h4" gutterBottom>
          Services
        </Typography>
        {/* Add more service-related content here */}
      </Container>
    </Box>
  );
}
