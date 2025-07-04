
import { useState } from "react"
import { Grid } from "@mui/material"
import JobCard from "./JobCard"

const dummyJobs = [
  { id: 1, title: "Frontend Developer", description: "React & MUI experience required." },
  { id: 2, title: "Backend Developer", description: "Node.js and MongoDB experience required." }
]

const JobList = () => {
  const [jobs] = useState(dummyJobs)

  return (
    <Grid container spacing={2}>
      {jobs.map(job => (
        <Grid item xs={12} md={6} key={job.id}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  )
}

export default JobList
