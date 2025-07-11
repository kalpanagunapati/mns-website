// src/components/Footer.js

import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1c1c1c',
        color: '#ccc',
        width: '100%',
        padding: '40px 20px 20px',
        boxSizing: 'border-box',
        mt: 'auto',
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 4,
        }}
      >
        {/* About MNS */}
        <Box sx={{ flex: '1 1 300px' }}>
          <Typography variant="h6" color="white" gutterBottom>
            About MNS
          </Typography>
          <Typography variant="body2">
            MNS SOLUTIONS is a premier software training institute in Hyderabad, dedicated to upskilling aspiring developers and professionals with cutting-edge technologies.
          </Typography>
        </Box>

        {/* Quick Links */}
        <Box sx={{ flex: '1 1 200px' }}>
          <Typography variant="h6" color="white" gutterBottom>
            Quick Links
          </Typography>
          <Stack spacing={1}>
            <Link href="#" underline="hover" color="inherit">About Us</Link>
            <Link href="#" underline="hover" color="inherit">Our Services</Link>
            <Link href="#" underline="hover" color="inherit">Contact Us</Link>
          </Stack>
        </Box>

        {/* Contact Us */}
        <Box sx={{ flex: '1 1 250px' }}>
          <Typography variant="h6" color="white" gutterBottom>
            Contact Us
          </Typography>
          <Stack spacing={1}>
            <Box display="flex" alignItems="center">
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">+91 6305427016</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <EmailIcon sx={{ mr: 1 }} />
              <Link href="https://mnssolutionsgroup.com" color="inherit" underline="hover">
                mnssolutionsgroup.com
              </Link>
            </Box>
            <Box display="flex" alignItems="center">
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">Kondapur, Hyderabad, India</Typography>
            </Box>
          </Stack>
        </Box>
      </Box>

      {/* Bottom Bar */}
      <Box textAlign="center" borderTop="1px solid #444" pt={2} mt={4}>
        <Typography variant="body2" color="white">
          © 2025 MNS Solutions | All Rights Reserved. Kalpana
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
