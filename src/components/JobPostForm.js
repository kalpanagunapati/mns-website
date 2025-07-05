import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  FormGroup,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormControlLabel,
  Checkbox,
  Typography,
  Grid,
} from "@mui/material";

const JobPostForm = ({ onJobPost }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [jobTypes, setJobTypes] = useState([]);
  const [location, setLocation] = useState("");
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleCheckboxChange = (event) => {
    const value = event.target.name;
    if (event.target.checked) {
      setJobTypes([...jobTypes, value]);
    } else {
      setJobTypes(jobTypes.filter((type) => type !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      id: Date.now(),
      title,
      description,
      jobTypes,
      location,
      salaryRange: {
        min: salaryMin,
        max: salaryMax,
      },
      recruiter: {
        email,
        password,
        phone,
      },
    };

    onJobPost(newJob);

    // Clear form
    setTitle("");
    setDescription("");
    setJobTypes([]);
    setLocation("");
    setSalaryMin("");
    setSalaryMax("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        label="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
        required
      />

      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={4}
        required
      />

      <Typography variant="subtitle1" sx={{ mt: 2 }}>
        Job Type:
      </Typography>
      <FormGroup row>
        {["Full-Time", "Part-Time", "Work From Home", "Internship", "Work Abroad"].map((type) => (
          <FormControlLabel
            key={type}
            control={
              <Checkbox
                checked={jobTypes.includes(type)}
                onChange={handleCheckboxChange}
                name={type}
              />
            }
            label={type}
          />
        ))}
      </FormGroup>

      <TextField
        label="Location (City)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        fullWidth
        margin="normal"
        required
      />

      <Typography variant="subtitle1" sx={{ mt: 2 }}>
        Salary (INR/month):
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Min Salary"
            type="number"
            value={salaryMin}
            onChange={(e) => setSalaryMin(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Max Salary"
            type="number"
            value={salaryMax}
            onChange={(e) => setSalaryMax(e.target.value)}
            fullWidth
            required
          />
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Recruiter Details
      </Typography>
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
  Recruiter Details
</Typography>

<Grid container spacing={2}>
  <Grid item xs={12} md={4}>
    <TextField
      label="Email"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      fullWidth
      required
    />
  </Grid>
  <Grid item xs={12} md={4}>
    <TextField
      label="Password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      fullWidth
      required
    />
  </Grid>
  <Grid item xs={12} md={4}>
    <TextField
      label="Phone Number"
      type="tel"
      inputProps={{ maxLength: 10 }}
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      fullWidth
      required
    />
  </Grid>
</Grid>

      <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
        Post Job
      </Button>
    </Box>
  );
};

export default JobPostForm;
