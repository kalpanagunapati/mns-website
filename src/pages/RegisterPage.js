import React, { Component } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Link,
  // withTheme
} from '@mui/material';
import { useMediaQuery } from '@mui/material';
import Footer from '../components/Footer/Footer';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', this.state);
    // Add registration logic here
  };

  render() {
    const { isSmallScreen } = this.props;

    return (
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: "url(https://www.transparenttextures.com/patterns/stardust.png)",
          backgroundColor: "#0f2027",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            mt: isSmallScreen ? 6 : 10,
            mb: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            px: isSmallScreen ? 2 : 0
          }}
        >
          {/* Headings above the card */}
          <Typography
            variant={isSmallScreen ? 'h4' : 'h3'}
            align="center"
            sx={{
              fontWeight: 700,
              color: '#0693E3',
              mb: 1,
              textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
            }}
          >
            Welcome to MNS Solutions
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: 'white',
              mb: 4,
              fontWeight: 300,
              fontSize: isSmallScreen ? '0.95rem' : '1rem',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            Let’s get you started with your account
          </Typography>

          {/* Card */}
          <Paper
            elevation={0}
            sx={{
              p: isSmallScreen ? 3 : 4,
              borderRadius: '20px',
              width: '100%',
              background: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              align="center"
              sx={{
                fontWeight: 600,
                color: '#0693E3',
                mb: 3,
              }}
            >
              Create Your Account
            </Typography>

            <Box
              component="form"
              onSubmit={this.handleSubmit}
              sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
            >
              <TextField
                label="Full Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
                fullWidth
                InputProps={{
                  style: { backgroundColor: '#fff', borderRadius: 10 },
                }}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
                fullWidth
                InputProps={{
                  style: { backgroundColor: '#fff', borderRadius: 10 },
                }}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
                fullWidth
                InputProps={{
                  style: { backgroundColor: '#fff', borderRadius: 10 },
                }}
              />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                required
                fullWidth
                InputProps={{
                  style: { backgroundColor: '#fff', borderRadius: 10 },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  py: 1.3,
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  borderRadius: 10,
                  backgroundColor: '#6a11cb',
                  backgroundImage: 'linear-gradient(315deg, #6a11cb 0%, #2575fc 74%)',
                }}
              >
                Register
              </Button>
            </Box>

            <Typography variant="body2" align="center" sx={{ mt: 3, color: '#fff' }}>
              Already have an account?{' '}
              <Link href="/login" underline="hover" color="inherit" fontWeight="bold">
                Login here
              </Link>
            </Typography>
          </Paper>
        </Container>
        <Footer />
      </Box>
    );
  }
}

// Wrapper functional component to use `useMediaQuery` in class component
const ResponsiveRegister = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return <RegisterForm isSmallScreen={isSmallScreen} />;
};

export default ResponsiveRegister;
