// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.jpg"
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2',marginLeft:2,marginBottom:1,}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,fontFamily:"revert"}}>
          <img src={Logo} alt="logo" style={{width:"100px"}}/>
        </Typography>
        <Box>
          <Button color="inherit" onClick={()=>{navigate("/")}}>Home</Button>
          <Button color="inherit" onClick={()=> window.open("https://aurangabad.quikr.com/html/about.php", "_blank", "noopener,noreferrer")}>About Us</Button>
          <Button color="inherit" onClick={()=>{navigate("/services")}}>Services</Button>
          <Button color="inherit">Contact Us</Button>
          <Button color="inherit" onClick={()=>{navigate("/login")}}>Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
// https://aurangabad.quikr.com/html/about.php
