
import { Card, CardContent, Typography, Button } from "@mui/material"

const JobCard = ({ job }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">{job.title}</Typography>
      <Typography variant="body2" color="text.secondary">{job.description}</Typography>
      <Button variant="outlined" size="small" sx={{ mt: 2 }}>Apply</Button>
    </CardContent>
  </Card>
)

export default JobCard
