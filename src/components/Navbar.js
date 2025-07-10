// src/components/Navbar.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../images/logo.jpg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';

  // Dropdown anchor state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static' sx={{ backgroundColor: '#566573', margin: 0 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
            MNS <span style={{ color: '#e91e63' }}>Solutions</span>
          </Typography>
        </Box>

        {/* Nav Buttons */}
        <Box>
          {isServicesPage ? (
            <>
              <Button color="inherit" onClick={() => navigate('/training')}>Trainings</Button>

              {/* Dropdown button */}
              <Button
                color="inherit"
                onClick={handleDropdownOpen}
              >
                Jobs ▼
              </Button>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleDropdownClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MenuItem onClick={() => { handleDropdownClose(); navigate('/jobseeker'); }}>Job Seeker</MenuItem>
                <MenuItem onClick={() => { handleDropdownClose(); navigate('/recruiter'); }}>Recruiter</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
              <Button color="inherit" onClick={() => navigate('/aboutus')}>AboutUs</Button>
              <Button color="inherit" onClick={() => navigate('/services')}>Services</Button>
              <Button color="inherit" onClick={() => navigate('/contact')}>Contact Us</Button>
              <Button color="inherit" onClick={() => navigate('/register')}>Register</Button>
              <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
             
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
