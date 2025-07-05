import { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Container,
  CardMedia,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

export default function Jobs() {
  const [data, setData] = useState();

  const jobsData = [
    {
      title: 'Android Developer',
      image: 'https://via.placeholder.com/300x180?text=Android+Developer',
      description: `As an Android Developer at NMS Solutions, you will design and implement advanced applications for the Android platform.
        You’ll work closely with cross-functional teams to define, design, and ship new features. The role requires strong experience in Java/Kotlin,
        a good understanding of Android SDK, REST APIs, and UI/UX best practices.`,
      servedJobs: [
        'Mobile Banking App for Finvesto Bank',
        'Food Delivery App for SwiftyEats',
        'E-commerce App for MartGo'
      ]
    },
    {
      title: 'iOS Developer',
      image: 'https://via.placeholder.com/300x180?text=iOS+Developer',
      description: `As an iOS Developer, you'll be responsible for building intuitive and responsive applications for Apple devices using Swift and Xcode.
        You'll collaborate with UI/UX designers and backend developers to ensure smooth functionality and visually appealing interfaces.
        Familiarity with CoreData, Combine, and Apple’s design principles is expected.`,
      servedJobs: [
        'Ride-sharing App for QuickCab',
        'Healthcare Tracker App for MedBuddy',
        'Retail App for StyleCart'
      ]
    },
    {
      title: 'React Native Developer',
      image: 'https://via.placeholder.com/300x180?text=React+Native+Developer',
      description: `Create performant mobile apps with React Native. Responsibilities include working with Redux, API integrations,
        and testing for both Android and iOS platforms. Ideal for developers familiar with ReactJS and mobile-first thinking.`
    },
    {
      title: 'Flutter Developer',
      image: 'https://via.placeholder.com/300x180?text=Flutter+Developer',
      description: `As a Flutter Developer, you will build beautiful and scalable apps using Flutter and Dart.
        You should be familiar with widget trees, state management (like Provider or Bloc), and publishing apps to Play Store and App Store.`
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#C0C0C0', minHeight: '100vh', py: 4 }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Job Roles Offered by NMS Solutions
        </Typography>

        <Grid container spacing={4} sx={{ mt: 3 }}>
          {jobsData.map((job, index) => (
            <Grid item xs={12} key={index}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} md={6}>
                    <CardMedia
                      component="img"
                      image={job.image}
                      alt={job.title}
                      sx={{
                        width: '100%',
                        height: 180,
                        objectFit: 'cover',
                        borderRadius: 1
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {job.title}
                      </Typography>
                      <Typography variant="body1" paragraph>
                        {job.description}
                      </Typography>

                      {job.servedJobs && (
                        <>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            Projects We’ve Delivered:
                          </Typography>
                          <List dense>
                            {job.servedJobs.map((project, idx) => (
                              <ListItem key={idx} sx={{ pl: 0 }}>
                                <ListItemText primary={`• ${project}`} />
                              </ListItem>
                            ))}
                          </List>
                        </>
                      )}
                    </CardContent>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
