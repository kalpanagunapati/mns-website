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
  Collapse,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [jobsOpen, setJobsOpen] = useState(false);

  const open = Boolean(anchorEl);

  const handleDropdownOpen = (event) => setAnchorEl(event.currentTarget);
  const handleDropdownClose = () => setAnchorEl(null);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleNavigate = (path) => {
    navigate(path);
    setDrawerOpen(false);
    setAnchorEl(null);
    setJobsOpen(false);
  };

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
                <Box sx={{ width: 250 }} role="presentation">
                  <List>
                    {location.pathname === '/services' ? (
                      <>
                        {/* Show only Trainings and Jobs */}
                        <ListItem button onClick={() => handleNavigate('/training')}>
                          <ListItemText primary="Trainings" />
                        </ListItem>
                        <ListItem button onClick={() => setJobsOpen(!jobsOpen)}>
                          <ListItemText primary="Jobs" />
                          {jobsOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={jobsOpen} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigate('/jobseeker')}>
                              <ListItemText primary="Job Seeker" />
                            </ListItem>
                            <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigate('/recruiter')}>
                              <ListItemText primary="Recruiter" />
                            </ListItem>
                          </List>
                        </Collapse>
                      </>
                    ) : (
                      <>
                        {/* Default full menu */}
                        <ListItem button onClick={() => handleNavigate('/')}>
                          <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button onClick={() => handleNavigate('/aboutus')}>
                          <ListItemText primary="About Us" />
                        </ListItem>
                        <ListItem button onClick={() => handleNavigate('/services')}>
                          <ListItemText primary="Services" />
                        </ListItem>
                        <ListItem button onClick={() => handleNavigate('/contact')}>
                          <ListItemText primary="Contact Us" />
                        </ListItem>
                        <Divider />
                        <ListItem button onClick={() => handleNavigate('/register')}>
                          <ListItemText primary="Register" />
                        </ListItem>
                        <ListItem button onClick={() => handleNavigate('/login')}>
                          <ListItemText primary="Login" />
                        </ListItem>
                      </>
                    )}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box>
              {location.pathname === '/services' ? (
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
                  <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
                  <Button color="inherit" onClick={() => navigate('/aboutus')}>About Us</Button>
                  <Button color="inherit" onClick={() => navigate('/services')}>Services</Button>
                  <Button color="inherit" onClick={() => navigate('/contact')}>Contact Us</Button>
                  <Button color="inherit" onClick={() => navigate('/register')}>Register</Button>
                  <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                </>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
