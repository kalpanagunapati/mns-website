import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Training.css';
import CourseRegistration from '../components/CourseRegistration/CourseRegistration';

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
    <i className="fas fa-chevron-right"></i>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    <i className="fas fa-chevron-left"></i>
  </div>
);

const sliderImages = [
  {
    url: require('../images/triainingimg1.jpg'),
    alt: 'Training Banner 1',
  },
  {
    url: require('../images/trainingimage2.jpg'),
    alt: 'Training Banner 2',
  },
  {
    url: require('../images/trainingimage3.jpg'),
    alt: 'Training Banner 3',
  },
  {
    url: require('../images/trainingimage4.jpg'),
    alt: 'Training Banner 4',
  },
];


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
    title: 'AWS DevOps',
    image: 'https://cdn-icons-png.flaticon.com/512/873/873107.png',
    description: 'Learn how to manage cloud infrastructure and automate CI/CD pipelines using AWS services, Docker, Jenkins, and more.',
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
    title: 'Salesforce Course',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968855.png',
    description: 'Learn to customize and develop Salesforce apps using Apex, Visualforce, and Lightning components.',
  },
  {
    title: 'Power BI',
    image: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png',
    description: 'Learn to visualize data, create dashboards, and build business intelligence reports using Power BI.',
  },
  {
    title: 'Manual Testing',
    image: 'https://cdn-icons-png.flaticon.com/512/2933/2933245.png',
    description: 'Understand the fundamentals of software testing, test case creation, and bug tracking manually.',
  },
  {
    title: 'Selenium Course',
    image: 'https://cdn-icons-png.flaticon.com/512/2721/2721290.png',
    description: 'Automate web applications using Selenium WebDriver, TestNG, and frameworks for real-time testing.',
  },
  {
    title: 'Digital Marketing',
    image: 'https://cdn-icons-png.flaticon.com/512/1087/1087929.png',
    description: 'Master SEO, SEM, social media, email, and content marketing strategies to grow online presence.',
  },
  {
    title: 'Data Science',
    image: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    description: 'Explore data analysis, machine learning, and visualization using Python and tools like Pandas and Matplotlib.',
  },
];


const Training = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="training-container">
      {/* Header */}
      <header className="header">
        <h1 className="brand">NMS SOLUTIONS</h1>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
        </div>
      </header>

      {/* Carousel with Custom Arrows */}
      <div className="img-container">
        <Slider {...sliderSettings}>
          {sliderImages.map((img, index) => (
            <div key={index} style={{border:'1px solid red'}}>
              <img src={img.url} alt={img.alt} className="carousel-img"/>
            </div>
          ))}
        </Slider>
      </div>

      {/* Course Cards */}
      <section className="services" >
        <h2 className="training-heading">Our Training Services</h2>
        <div className="cards-grid">
          {trainingData.map((course, i) => (
            <Link to={`/course/${encodeURIComponent(course.title)}`} key={i} className="card-link">
              <div className="card">
                <img src={course.image} alt={course.title} className="card-img" />
                <h3 className="card-title">{course.title}</h3>
                <p className="card-description">{course.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CourseRegistration />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About NMS</h3>
            <p>NMS SOLUTIONS is a premier software training institute in Hyderabad, dedicated to upskilling aspiring developers and professionals with cutting-edge technologies.</p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p><i className="fas fa-phone"></i> +91 6305427016</p>
            <p><i className="fas fa-envelope"></i> https://mnssolutionsgroup.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Ameerpet, Hyderabad, India</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NMS Solutions | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Training;
