import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const JobPostForm = ({ onJobPost }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      id: Date.now(),
      title,
      description,
    };

    onJobPost(newJob);
    setTitle("");
    setDescription("");
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
      <Button type="submit" variant="contained" color="primary">
        Post Job
      </Button>
    </Box>
  );
};

export default JobPostForm;
