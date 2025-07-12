import React from 'react';
import {
  // AppBar,
  // Toolbar,
  Typography,
  // Button,
  Box,
  // TextField,
  Container,
  // Stack,
} from '@mui/material';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <Box sx={{margin:'0px', backgroundSize:'cover',overflowX:'hidden',overflowY:'hidden'}}>
    <Box sx={{
      minHeight: '100vh',
      position: 'relative',

      backgroundImage: 'url("https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1600&q=80")',

      //backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop:5,
      marginBottom:0,
      paddingBottom:0,
      margin: 0,
      padding: 0,
    }}>
      
      {/* Navbar */}
      {/* <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', pt: 2 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
            NMS <span style={{ color: '#e91e63' }}>Solutions</span>
          </Typography>
          <Stack direction="row" spacing={4}>
            {['Home', 'About us', 'Courses', 'News', 'Contact'].map(item => (
              <Button key={item} sx={{ color: '#fff', fontWeight: 500 }}>{item}</Button>
            ))}
            <Button variant="contained" sx={{ bgcolor: '#e91e63', color: '#fff', textTransform: 'none' }}>
              Login
            </Button>
          </Stack>
        </Toolbar>
      </AppBar> */}

      {/* Hero Section */}
      <Container sx={{ textAlign: 'center', pt: 15, backgroundColor:'transparent'}}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color:'white' }}>
          Make Your Dream Done With MNS Solutions 
          {/* Get The Best Free Online Courses */}
        </Typography>
        <Typography sx={{ maxWidth: 600, mx: 'auto', mb: 6, color:'white', fontSize:'26px'}}>
          your trusted partner for job opportunities and professional training.
          At MNS Solutions, we empower your future by connecting you with the right skills and the right jobs
        </Typography>

        {/* Form */}
        {/* { <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          justifyContent="center"
          sx={{ maxWidth: 600, mx: 'auto' }}
        >
          <TextField
            fullWidth
            placeholder="Name"
            variant="filled"
            InputProps={{ disableUnderline: true, sx: { bgcolor: '#fff', borderRadius: 1 } }}
          />
          <TextField
            fullWidth
            placeholder="E-mail"
            variant="filled"
            InputProps={{ disableUnderline: true, sx: { bgcolor: '#fff', borderRadius: 1 } }}
          />
          <Button variant="contained" sx={{ bgcolor: '#e91e63', px: 4 }}>
            Sign Up Now
          </Button>
        </Stack>} */}
      </Container>
    </Box>
    <Footer/>
    </Box>

  );
}
