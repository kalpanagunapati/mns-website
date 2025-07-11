import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import Footer from "../components/Footer/Footer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "recruiter@example.com") {
      navigate("/recruiter");
    } else if (email === "jobseeker@example.com") {
      navigate("/applicant");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage:
            "url(https://www.transparenttextures.com/patterns/stardust.png)", // transparent styled background
          backgroundColor: "#0f2027", // dark overlay
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Poppins, sans-serif",
          px: 2,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 600,
              color: "#ffffff",
              mb: 2,
              textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            Welcome Back
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{
              color: "#eaeaea",
              mb: 4,
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            Login to your account to explore opportunities
          </Typography>

          <Paper
            elevation={0}
            sx={{
              padding: 4,
              borderRadius: 4,
              background: "rgba(255, 255, 255, 0.08)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#fff",
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{ fontWeight: 500, mb: 3 }}
            >
              Login to Job Portal
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                required
                InputProps={{
                  style: {
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: 8,
                  },
                }}
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                required
                InputProps={{
                  style: {
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: 8,
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  mt: 2,
                  py: 1.3,
                  fontWeight: "bold",
                  borderRadius: 3,
                  fontSize: "1rem",
                  backgroundImage:
                    "linear-gradient(to right, #00c6ff, #0072ff)",
                  textTransform: "none",
                }}
              >
                Sign In
              </Button>
              <Typography
                variant="body2"
                align="center"
                sx={{ mt: 2, color: "#f0f0f0" }}
              >
                Don’t have an account?{" "}
                <Link
                  href="/register"
                  underline="hover"
                  sx={{ color: "#ffffff", fontWeight: "bold" }}
                >
                  Register here
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default LoginPage;
