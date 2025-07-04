import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const ApplicationList = ({ applications }) => {
  if (!applications.length) {
    return (
      <Box mt={4}>
        <Typography variant="h6" align="center" color="text.secondary">
          No applications yet.
        </Typography>
      </Box>
    );
  }

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        Posted Jobs / Applications
      </Typography>
      <Grid container spacing={3}>
        {applications.map((job, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                  <WorkOutlineIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6">{job.title}</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {job.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ApplicationList;
