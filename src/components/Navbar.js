// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../images/logo.jpg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // get current path

  const isServicesPage = location.pathname === '/services';

  return (
    <AppBar position='static' sx={{ backgroundColor: '#1976d2', margin:0,  }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Logo}
            alt="logo"
            style={{ width: '100px', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />
        </Box>

        {/* Conditionally render nav buttons */}
        <Box>
          {isServicesPage ? (
            <Button color="inherit" onClick={() => navigate('/training')}>Trainings</Button>
          ) : (
            <>
              <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
              <Button
                color="inherit"
                component="a"
                href="https://aurangabad.quikr.com/html/about.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us
              </Button>
              <Button color="inherit" onClick={() => navigate('/services')}>Services</Button>
              <Button color="inherit" onClick={() => navigate('/contact')}>Contact Us</Button>
              <Button color="inherit" onClick={() => navigate('/login')}>Logout</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
