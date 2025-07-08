import React, { useRef } from 'react';
import {
  Box,
  Card,
  Typography,
  Grid,
  TextField,
  Button,
  Chip,
  Avatar,
  IconButton,
  MenuItem,
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import StarIcon from '@mui/icons-material/Star';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import SearchIcon from '@mui/icons-material/Search';
import Footer from '../components/Footer/Footer';

const jobsData = [
  {
    title: 'Android Developer',
    company: 'ABC',
    rating: 4.0,
    reviews: 81,
    experience: '1-2 Yrs',
    location: 'Hyderabad, Bengaluru',
    description:
      'The ideal candidate should have excellent communication skills and proficiency in Malayalam.',
    tags: ['Malayalam', 'Senior Executive', 'Customer Support Associate', 'Customer support'],
    posted: '3+ weeks ago',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/KUKUFM_Logo.png/600px-KUKUFM_Logo.png',
  },
  {
    title: 'Android Developer',
    company: 'ABC',
    rating: 4.0,
    reviews: 81,
    experience: '1-2 Yrs',
    location: 'Hyderabad, Bengaluru',
    description:
      'The ideal candidate should have excellent communication skills and proficiency in Malayalam.',
    tags: ['Malayalam', 'Senior Executive', 'Customer Support Associate', 'Customer support'],
    posted: '3+ weeks ago',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/KUKUFM_Logo.png/600px-KUKUFM_Logo.png',
  },
  {
    title: 'Android Developer',
    company: 'ABC',
    rating: 4.0,
    reviews: 81,
    experience: '1-2 Yrs',
    location: 'Hyderabad, Bengaluru',
    description:
      'The ideal candidate should have excellent communication skills and proficiency in Malayalam.',
    tags: ['Malayalam', 'Senior Executive', 'Customer Support Associate', 'Customer support'],
    posted: '3+ weeks ago',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/KUKUFM_Logo.png/600px-KUKUFM_Logo.png',
  },
  {
    title: 'Android Developer',
    company: 'ABC',
    rating: 4.0,
    reviews: 81,
    experience: '1-2 Yrs',
    location: 'Hyderabad, Bengaluru',
    description:
      'The ideal candidate should have excellent communication skills and proficiency in Malayalam.',
    tags: ['Malayalam', 'Senior Executive', 'Customer Support Associate', 'Customer support'],
    posted: '3+ weeks ago',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/KUKUFM_Logo.png/600px-KUKUFM_Logo.png',
  },
  {
    title: 'Android Developer',
    company: 'ABC',
    rating: 4.0,
    reviews: 81,
    experience: '1-2 Yrs',
    location: 'Hyderabad, Bengaluru',
    description:
      'The ideal candidate should have excellent communication skills and proficiency in Malayalam.',
    tags: ['Malayalam', 'Senior Executive', 'Customer Support Associate', 'Customer support'],
    posted: '3+ weeks ago',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/KUKUFM_Logo.png/600px-KUKUFM_Logo.png',
  },
  {
    title: 'Android Developer',
    company: 'ABC',
    rating: 4.0,
    reviews: 81,
    experience: '1-2 Yrs',
    location: 'Hyderabad, Bengaluru',
    description:
      'The ideal candidate should have excellent communication skills and proficiency in Malayalam.',
    tags: ['Malayalam', 'Senior Executive', 'Customer Support Associate', 'Customer support'],
    posted: '3+ weeks ago',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/KUKUFM_Logo.png/600px-KUKUFM_Logo.png',
  },
  // Add more job entries here...
];

const jobRoles = [
  'Android Developer', 'iOS Developer', 'React Native Developer', 'Flutter Developer',
  'Software Engineer', 'Web Developer', 'Backend Developer', 'Data Scientist', 'AWS Developer',
  'BackEnd Developer', 'FrontEnd Developer', 'FullStack Developer', 'Python Developer',
  'MERN Stack Developer', 'Data Entry', 'UI/UX Developer', 'Content Writer', 'BPO/Telecaller',
  'Business Analyst', 'Data Collection/Survey', 'HR/Admin', 'IT Hardware&Network Engineer',
  'QA/Test Engineer', 'Digital Marketing'
];

const indianCities = [
  'Ahmedabad', 'Bangalore', 'Chandigarh', 'Chennai', 'Coimbatore', 'Delhi', 'Hyderabad',
  'Kochi', 'Kolkata', 'Mumbai', 'Pune', 'Gurgaon', 'Jaipur', 'Lucknow', 'Noida', 'Navi Mumbai',
  'Trivandrum'
];

const experienceLevels = [
  'Fresher', '1 Year Experience', '2 Years Experience', '3+ Years Experience', '5+ Years Experience'
];

export default function JobsMUI() {
  const jobRefs = useRef({});

  return (
    <Box sx={{ bgcolor: '#f0f0f0', minHeight: '100vh', p: 4 }}>
      {/* Search Filters */}
      <Grid container spacing={2} justifyContent="center" mb={4} bgcolor="#566573" height="100px" paddingTop="20px">
        <Grid item>
          <Autocomplete
            options={jobRoles}
            renderInput={(params) => <TextField {...params} label="Job Role" size="small" variant="outlined" />}
            sx={{ width: 200, backgroundColor: 'white' }}
          />
        </Grid>
        <Grid item>
          <Autocomplete
            options={indianCities}
            renderInput={(params) => <TextField {...params} label="City / Location" size="small" variant="outlined" />}
            sx={{ width: 200, backgroundColor: 'white' }}
          />
        </Grid>
        <Grid item>
          <Autocomplete
            options={experienceLevels}
            renderInput={(params) => <TextField {...params} label="Experience" size="small" variant="outlined" />}
            sx={{ width: 200, backgroundColor: 'white' }}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" sx={{ height: '40px', minWidth: '40px', padding: 0 }}>
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
      {/* <Grid container spacing={2} justifyContent="center" mb={4} bgcolor={"#566573"} height={'100px'} paddingTop={'15px'}>
        <Grid item>
          <TextField
            select
            label="Job Role"
            variant="outlined"
            size="small"
            defaultValue=""
            sx={{ minWidth: 180, backgroundColor: 'white' }}
          >
            {jobRoles.map((role, index) => (
              <MenuItem key={index} value={role}>
                {role}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item>
          <TextField
            select
            label="City / Location"
            variant="outlined"
            size="small"
            defaultValue=""
            sx={{ minWidth: 180, backgroundColor: 'white' }}
          >
            {indianCities.map((city, index) => (
              <MenuItem key={index} value={city}>
                {city}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item>
          <TextField
            select
            label="Experience"
            variant="outlined"
            size="small"
            defaultValue=""
            sx={{ minWidth: 180, backgroundColor: 'white' }}
          >
            {experienceLevels.map((exp, index) => (
              <MenuItem key={index} value={exp}>
                {exp}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            sx={{ height: '40px', minWidth: '40px', padding: 0 }}
          >
            <SearchIcon />
          </Button>
        </Grid>
      </Grid> */}

      {/* Job Listings Header */}
      <Typography variant="h5" align="center" gutterBottom>
        Available Jobs
      </Typography>

      {/* Job Cards */}
      <Grid container direction="column" alignItems="center" spacing={3}>
        {jobsData.map((job, index) => (
          <Grid item key={index} xs={12} sx={{ width: '100%', maxWidth: 800 }}>
            <Card
              ref={(el) => (jobRefs.current[job.title] = el)}
              sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6">{job.title}</Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography sx={{ fontWeight: 600 }}>{job.company}</Typography>
                  <StarIcon sx={{ color: '#f5a623', fontSize: 18, ml: 1, mr: 0.5 }} />
                  <Typography>{job.rating}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({job.reviews} Reviews)
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <CalendarMonthIcon sx={{ fontSize: 18, mr: 0.5 }} />
                  <Typography variant="body2" sx={{ mr: 2 }}>
                    {job.experience}
                  </Typography>
                  <LocationOnIcon sx={{ fontSize: 18, mr: 0.5 }} />
                  <Typography variant="body2">{job.location}</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <DescriptionIcon sx={{ fontSize: 18, mr: 1 }} />
                  <Typography variant="body2">
                    {job.description.length > 80
                      ? job.description.slice(0, 80) + '...'
                      : job.description}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {job.tags.map((tag, idx) => (
                    <Chip key={idx} label={tag} size="small" />
                  ))}
                </Box>

                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mt: 1, display: 'block' }}
                >
                  {job.posted}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar
                  src={job.logo}
                  alt="logo"
                  sx={{ width: 50, height: 50, mb: 1 }}
                  variant="rounded"
                />
                <IconButton>
                  <BookmarkBorderIcon fontSize="small" />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Footer />
    </Box>
  );
}
