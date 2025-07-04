// src/pages/Home.jsx
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  MenuItem,
  Select,
  Button,
  FormControl,
  InputLabel,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = () => {
    if (userType) {
      navigate('/register');
    } else {
      alert('Please select an option (Job or Training)');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ padding: 4, marginTop: 10, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom color="primary">
          Welcome to NMS Job Portal
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Find your dream job or training opportunity across India
        </Typography>

        <FormControl fullWidth sx={{ mt: 3 }}>
          <InputLabel id="select-type-label">Choose your category</InputLabel>
          <Select
            labelId="select-type-label"
            id="select-type"
            value={userType}
            label="Choose your category"
            onChange={handleChange}
          >
            <MenuItem value="job">Job</MenuItem>
            <MenuItem value="training">Training</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 4 }}
          onClick={handleSubmit}
        >
          Register / Login
        </Button>
      </Paper>
    </Container>
  );
}
