import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Paper,
  Box,
  Grid,
  Divider,
  TextField
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';


export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSubmit = () => {
    navigate('/register');
  };

  return (
    <Box sx={{ backgroundColor: '#C0C0C0', marginTop: '10px'}}>
      <Container>
        {/* Hero Section */}
        <Paper elevation={4} sx={{ padding: 4 }}>
          <Typography variant="h4" color="primary" align="center" gutterBottom>
            Welcome to NMS Job Portal
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Your one-stop platform for jobs and training opportunities across India
          </Typography>

          {/* Search and Button Row */}
          <Box
            sx={{
              mt: 4,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            {/* Search Input */}
            <TextField
              variant="outlined"
              placeholder="Search by role, location, or skills"
              value={searchQuery}
              onChange={handleSearchChange}
              sx={{ minWidth: 300 }}
            />

            {/* Register/Login Button */}
            <Button
              variant="contained"
              color="primary"
              sx={{ minWidth: 150 }}
              onClick={handleSubmit}
            >
              Register / Login
            </Button>
          </Box>
        </Paper>

        {/* Info Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Why Choose NMS Job Portal?
          </Typography>
          <Divider sx={{ mb: 4 }} />

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ padding: 3 }}>
                <Typography variant="h5" color="secondary" gutterBottom>
                  For Job Seekers
                </Typography>
                <Typography variant="body1">
                  - Explore jobs across India by location, role, or salary. <br />
                  - Personalized job recommendations. <br />
                  - Training programs to upgrade your skills. <br />
                  - Easy application and tracking dashboard.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ padding: 3 }}>
                <Typography variant="h5" color="secondary" gutterBottom>
                  For Recruiters
                </Typography>
                <Typography variant="body1">
                  - Post job listings with ease. <br />
                  - Filter candidates by experience and skill. <br />
                  - View applications in real-time. <br />
                  - Access a large pool of trained candidates.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer/>
    </Box>
  );
}
