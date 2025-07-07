import React from 'react';
import './CourseRegistration.css'; // You can customize styles here

const CourseRegistration = () => {
  const handleRegisterClick = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSeRSmX-WgHjl_Ze9SYukgD_6PQM_35hdeQLIsPLcDDGQtnyaA/viewform',
      '_blank'
    );
  };

  return (
    <div className="offer-container">
      <h1 className="offer-heading">Make Your Dream Done</h1>
      <h2 className="offer-subheading">
        Get Trained In 3 Months With 10+ Years Experienced Trainers
      </h2>

      <p className="highlight-text">
        • TRAINING + INTERNSHIP + WORKING ON LIVE PROJECTS + CERTIFICATION + APTITUDE + 
        COMMUNICATION SKILLS + INTERVIEW SKILLS + JOB ASSISTANCE
      </p>

      <p className="price-info">
        All Above Services Just For <strong>₹10,000 (Ten Thousand Rupees)</strong>
      </p>

      <p className="domains">
        <strong>Domains:</strong> Azure + Linux, Power BI, Java Full Stack, Testing (Manual, Automation, Selenium),
        AWS + DevOps, .NET Full Stack, Python + Data Science AI ML, Web Technologies, Angular JS + Node JS + React JS,
        Salesforce, Power BI, Digital Marketing
      </p>

      <p className="call-to-action">
        <strong>Join Now</strong> for clear information and course content!
      </p>

      <p>
        📞 Call or Message: <a href="tel:6305427016">6305427016</a>
      </p>

      <p>
        🌐 Website: <a href="https://mnssolutionsgroup.com" target="_blank" rel="noopener noreferrer">
          mnssolutionsgroup.com
        </a>
      </p>

      <button className="register-button" onClick={handleRegisterClick}>
        Register Now
      </button>
    </div>
  );
};

export default CourseRegistration;
