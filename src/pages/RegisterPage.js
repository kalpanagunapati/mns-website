import React, { Component } from 'react';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Paper,
    Link
} from '@mui/material';
import Footer from '../components/Footer/Footer';

class Register extends Component {
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
        // Handle actual registration logic here
    };

    render() {
        return (
            <Box>
            <Container maxWidth="sm" sx={{ mt: 8 }}>
                <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
                    <Typography variant="h5" gutterBottom align="center">
                        Create an Account
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={this.handleSubmit}
                        sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                        <TextField
                            label="Full Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                            required
                            fullWidth
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{ mt: 2, py: 1.5, fontWeight: 'bold' }}
                        >
                            Register
                        </Button>
                    </Box>
                    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                        Already have an account?{' '}
                        <Link href="/login" underline="hover">
                            Login here
                        </Link>
                    </Typography>
                </Paper>
            </Container>
            <Footer/>
            </Box>
        );
    }
}

export default Register;
