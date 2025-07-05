import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const trainingData = [
    {
        title: 'Java Full Stack',
        image: 'https://cdn-icons-png.flaticon.com/512/919/919854.png',
        description: 'Master Java, Spring Boot, Hibernate, and front-end tools to build robust full-stack applications.',
    },
    {
        title: '.NET Development',
        image: 'https://cdn-icons-png.flaticon.com/512/6132/6132221.png',
        description: 'Learn to develop web and desktop applications using C#, ASP.NET, and .NET Core.',
    },
    {
        title: 'Python Programming',
        image: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
        description: 'Start your journey in Python, Django, and automation scripting with hands-on projects.',
    },
    {
        title: 'Oracle Database',
        image: 'https://cdn-icons-png.flaticon.com/512/2772/2772128.png',
        description: 'Gain expertise in Oracle SQL, PL/SQL, and database administration.',
    },
    {
        title: 'Web Development',
        image: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
        description: 'Build responsive websites using HTML, CSS, JavaScript, Bootstrap, and React.',
    },
    {
        title: 'Data Science',
        image: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
        description: 'Explore data analysis, machine learning, and visualization using Python and tools like Pandas and Matplotlib.',
    },
];

export default function Services() {
  const [data, setData] = useState();
  const navigate = useNavigate(); // ✅ Moved here before usage

  const handleJobsClick = () => {
    navigate('/jobs'); // Change to your actual jobs route
  };

  const handleTrainingClick = () => {
    navigate('/training'); // Change to your actual training route
  };

  return (
    <Box sx={{ backgroundColor: '#fff',}}>
      {/* Navbar */}
      {/* <AppBar position="static" sx={{ backgroundColor: '#0d47a1' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NMS Solutions
          </Typography>
          <Button color="inherit" onClick={handleJobsClick}>
            Jobs
          </Button>
          <Button color="inherit" onClick={handleTrainingClick}>
            Training
          </Button>
        </Toolbar>
      </AppBar> */}

      {/* Main Content */}
      <Container>
        <Typography variant="h4" gutterBottom>
          Services
        </Typography>
                <div className="training-container">
            <header className="header">
                <h1 className="brand">NMS SOLUTIONS</h1>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </header>

            <div className="img-container">
                <img
                    src="https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=1024x1024&w=is&k=20&c=LoC4mCau4RJAMj4JWJo-Q03Brq4qUFY1tx8NfaqngIQ="
                    className="imag"
                    alt="Online Training"
                />
            </div>

            <section className="services">
                <h2 className="training-heading">Our Training Services</h2>
                <div className="cards-grid">
                    {trainingData.map((course, i) => (
                        <div className="card" key={i}>
                            <img src={course.image} alt={course.title} className="card-img" />
                            <h3 className="card-title">{course.title}</h3>
                            <p className="card-description">{course.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modern Footer */}
          
        </div>
        {/* Add more service-related content here */}
      </Container>
        <Footer/>
    </Box>
  );
}
