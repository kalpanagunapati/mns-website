import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

const JobPostForm = ({ onJobPost }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [jobTypes, setJobTypes] = useState([]);
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

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
      expectedSalary: salary,
    };

    onJobPost(newJob);

    // Clear form
    setTitle("");
    setDescription("");
    setJobTypes([]);
    setLocation("");
    setSalary("");
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
        <FormControlLabel
          control={
            <Checkbox
              checked={jobTypes.includes("Full-Time")}
              onChange={handleCheckboxChange}
              name="Full-Time"
            />
          }
          label="Full-Time"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={jobTypes.includes("Part-Time")}
              onChange={handleCheckboxChange}
              name="Part-Time"
            />
          }
          label="Part-Time"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={jobTypes.includes("Internship")}
              onChange={handleCheckboxChange}
              name="Internship"
            />
          }
          label="Internship"
        />
      </FormGroup>

      <TextField
        label="Location (City)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        fullWidth
        margin="normal"
        required
      />

      <TextField
        label="Expected Salary (INR per month)"
        type="number"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        fullWidth
        margin="normal"
        required
      />

      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Post Job
      </Button>
    </Box>
  );
};

export default JobPostForm;
