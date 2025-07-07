import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './CourseDetails.css';
import { Description } from '@mui/icons-material';

const courseDetails = {
  '.NET Development': {
    description: 'Java is a powerful, high-level programming language used by top companies to build everything from web applications to enterprise systems and Android apps. With its platform-independent nature and strong community support, Java offers unmatched flexibility and job opportunities across industries. By mastering Java, you wll not only understand the fundamentals of object-oriented programming but also gain the skills to build real-world projects using modern tools like Spring Boot and React.js. Whether you are a beginner or switching careers, Java provides a solid foundation that can lead to long-term success in the tech world.',
    concepts: ['C# Basics', 'ASP.NET MVC', 'Entity Framework', 'Web API', 'Deployment'],
    benefits: ['Enterprise-level skills', 'High demand in MNCs', 'Cross-platform'],
    duration: '2.5 Months',
    price: '₹10,000',
    video: 'https://www.youtube.com/embed/1Gz6CrgudD0',
  },
  'Java Full Stack': {
    concepts: ['Core Java', 'Advanced Java', 'MySQL'],
    benefits: ['Full project building', 'Backend + frontend mastery'],
    duration: '3 Months',
    price: '₹10,000',
    video: 'https://www.youtube.com/embed/ntLJmHOJ0ME',
  },
  'Python Programming': {
    concepts: ['Core Python', 'OOPs', 'Django', 'Automation', 'REST APIs'],
    benefits: ['Easy to learn', 'Useful for scripting, ML, web apps'],
    duration: '2 Months',
    price: '₹10,000',
    video: 'https://www.youtube.com/embed/kqtD5dpn9C8',
  },
  'Oracle Database': {
    concepts: ['SQL', 'PL/SQL', 'Oracle Architecture', 'Performance Tuning', 'DB Admin'],
    benefits: ['Database admin skills', 'Used in enterprise systems'],
    duration: '2 Months',
    price: '₹10,000',
    video: 'https://www.youtube.com/embed/6Z2b9dD6xhw',
  },
};

const CourseDetail = () => {
  const { title } = useParams();
  const course = courseDetails[decodeURIComponent(title)];

  if (!course) return <h2 className="not-found">Course not found</h2>;

  return (
    <div className="course-detail-container">
      <div className="glass-card">
        <h1 className="course-title">{title}</h1>

        <section>
          <h2>📘 Course Concepts</h2>
          <ul>
            {course.concepts.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>🎯 Benefits</h2>
          <ul>
            {course.benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>⏳ Duration</h2>
          <p>{course.duration}</p>
          <h2>💰 Price</h2>
          <p className="price">{course.price}</p>
        </section>

        <section>
          <h2>🎥 Demo Video</h2>
          <div className="video-container">
            <iframe
              src={course.video}
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <div className="back-btn">
          <Link to="/training">← Back to Courses</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
