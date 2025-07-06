import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  TextField,
  Container,
  Stack,
} from '@mui/material';

export default function Home() {
  return (
    <Box sx={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      color: '#fff'
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
      <Container sx={{ textAlign: 'center', pt: 15 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Get The Best Free Online Courses
        </Typography>
        <Typography sx={{ maxWidth: 600, mx: 'auto', mb: 6 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
        </Typography>

        {/* Form */}
        <Stack
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
        </Stack>
      </Container>
    </Box>
  );
}
