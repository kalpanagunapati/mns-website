import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const open = Boolean(anchorEl);

  const isServicesPage = location.pathname === '/services';
  const isHomePage = location.pathname === '/';

  const handleDropdownOpen = (event) => setAnchorEl(event.currentTarget);
  const handleDropdownClose = () => setAnchorEl(null);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleNavigate = (path) => {
    navigate(path);
    setDrawerOpen(false); // Close drawer on mobile
    setAnchorEl(null); // Close dropdown if open
  };

  // Navigation items
  const mainLinks = [
    { text: 'Home', path: '/' },
    { text: 'About Us', path: '/aboutus' },
    { text: 'Services', path: '/services' },
    { text: 'Contact Us', path: '/contact' },
  ];

  const authLinks = [
    { text: 'Register', path: '/register' },
    { text: 'Login', path: '/login' },
  ];

  const serviceLinks = [
    { text: 'Trainings', path: '/training' },
    { text: 'Job Seeker', path: '/jobseeker' },
    { text: 'Recruiter', path: '/recruiter' },
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#566573', zIndex: 1300 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', color: '#fff', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            MNS <span style={{ color: '#e91e63' }}>Solutions</span>
          </Typography>

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                  <List>
                    {/* Main links always shown */}
                    {mainLinks.map((item) => (
                      <ListItem button key={item.text} onClick={() => handleNavigate(item.path)}>
                        <ListItemText primary={item.text} />
                      </ListItem>
                    ))}

                    {/* If on services page, show extra service sub-links */}
                    {isServicesPage && (
                      <>
                        <Divider />
                        {serviceLinks.map((item) => (
                          <ListItem button key={item.text} onClick={() => handleNavigate(item.path)}>
                            <ListItemText primary={item.text} />
                          </ListItem>
                        ))}
                      </>
                    )}

                    {/* Auth links for non-home pages */}
                    {!isHomePage && (
                      <>
                        <Divider />
                        {authLinks.map((item) => (
                          <ListItem button key={item.text} onClick={() => handleNavigate(item.path)}>
                            <ListItemText primary={item.text} />
                          </ListItem>
                        ))}
                      </>
                    )}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box>
              {isServicesPage ? (
                <>
                  <Button color="inherit" onClick={() => navigate('/training')}>Trainings</Button>
                  <Button color="inherit" onClick={handleDropdownOpen}>Jobs ▼</Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleDropdownClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  >
                    <MenuItem onClick={() => handleNavigate('/jobseeker')}>Job Seeker</MenuItem>
                    <MenuItem onClick={() => handleNavigate('/recruiter')}>Recruiter</MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  {mainLinks.map((item) => (
                    <Button key={item.text} color="inherit" onClick={() => navigate(item.path)}>
                      {item.text}
                    </Button>
                  ))}
                  {!isHomePage &&
                    authLinks.map((item) => (
                      <Button key={item.text} color="inherit" onClick={() => navigate(item.path)}>
                        {item.text}
                      </Button>
                    ))}
                </>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Spacer for fixed AppBar */}
    </>
  );
};

export default Navbar;
