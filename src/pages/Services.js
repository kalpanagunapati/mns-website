import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Container
} from '@mui/material';
import Footer from '../components/Footer/Footer';

const servicesData = [
  { title: 'Web Development', description: 'Build fast, responsive websites using React, HTML, CSS, and Node.js.' },
  { title: 'App Development', description: 'Develop Android and iOS apps with modern frameworks like Flutter and React Native.' },
  { title: 'Custom Software Solutions', description: 'Tailored software products to meet your business requirements.' },
  { title: 'Training & Workshops', description: 'Hands-on training sessions for freshers, job seekers, and professionals.' },
  { title: 'Digital Marketing', description: 'SEO, SEM, and social media services to boost your brand online.' },
  { title: 'Job Portal Platform', description: 'Post jobs, find candidates, and manage hiring through our portal.' },
  { title: 'Cloud Services', description: 'AWS and Azure deployment, automation, and scaling.' },
  { title: 'Technical Support', description: '24/7 support for software maintenance and infrastructure.' },
  { title: 'IT Consulting', description: 'Expert guidance for business transformation and tech upgrade.' },
];

const Services = () => {
  const [search, setSearch] = useState('');

  const filteredServices = servicesData.filter(service =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ bgcolor: '#1c1c28', minHeight: '100vh', color: '#fff', py: 6 }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#fdf089' }}>
          All Our Services
        </Typography>
        <Typography variant="body1" mb={4}>
          NMS Solutions offers a wide range of services tailored for businesses, professionals, and students — helping them grow through technology.
        </Typography>

        {/* Search Box */}
        {/* <TextField
          placeholder="Filter..."
          variant="outlined"
          fullWidth
          sx={{
            mb: 4,
            input: { color: '#fff' },
            fieldset: { borderColor: '#444' },
            bgcolor: '#2a2a3d',
            borderRadius: 3
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> */}

        {/* Service Cards */}
        <Grid container spacing={3}>
          {filteredServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ bgcolor: '#2a2a3d', color: '#fff', height: '100%' ,width: '350px'}}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" sx={{ color: '#fdf089' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer/>
    </Box>
  );
};

export default Services;
