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
  'AWS DevOps': {
    concepts: ['Cloud Models,Cloud Deployment Models,Global Infrastructure', 'Copute,Storage,Databases,Networking', 'Auto Scaling', 'Devops Practices', 'Severless Architecture'],
    benefits: ['Easy to learn', 'Free Tier and Student Support','Strong Resume Value','Hands-on Cloud Experience'],
    duration: '2 Months',
    price: '₹10,000',
    video: 'https://www.youtube.com/embed/kqtD5dpn9C8',
  },
  'Web Development': {
    concepts: ['Frontend Development', 'Backend Development', 'Client-Server Architecture', 'Databaes', 'RESTful APIs'],
    benefits: ['Easy to learn', 'High Demand in Job Market', 'Cross-Platform Compatibility'],
    duration: '2 Months',
    price: '₹10,000',
    video: 'https://www.youtube.com/embed/kqtD5dpn9C8',
  },
  'Salesforce Course': {
    concepts: ['CRM(Customer Relationship Management)', 'Salesforce Architecture', 'Automation Tools', 'Apex Programming', 'Lightning Components and App Builder'],
    benefits: ['Globally recognized certifications', 'High demand in the IT and business sectors', 'Cloud-based solution with job opportunities worldwide','Enhances automation and Customer services skills','offers roles like Salesforce Admin Developer,Counsultant'],
    duration: '2 Months',
    price: '₹10,000',
    video: 'https://www.youtube.com/embed/kqtD5dpn9C8',
  },
  'Power BI': {
    concepts: ['Data Modeling and Transformation', 'DAX(Data Analysis Expressions)', 'Interactive Dashboards and Reports', 'Connecting Data Source(Excel,SQl,Web APIs', 'Publishing and Sharing Reports(Power BI Service)'],
    benefits: ['Easy to create insightful visualizations', 'Widely used in business and finance industies','High-paying job roles like BI Analyst or Data Analyst','Strong integration with Microsoft tools(Excel,Azure)'],
    duration: '2 Months',
    price: '₹10,000',
    video: 'https://www.youtube.com/embed/kqtD5dpn9C8',
  },
  'Manual Testing': {
    concepts: ['SDLC&STLC(Development Testing Life Cycles)', 'Test Case Design&Execution', 'Bug Tracking Tools(like JIRRA)', 'Automation Testing with Selenium WebDriver', 'Basic Programming(Java/Python)for Automation'],
    benefits: ['Fundamental understanding of software testing', 'In-demand skills in both manual and automation tetsing','Opportunities in QA,Test Analyst,and Automation roles','Strong foundation for learning other testing tools','Easy entry point into IT without a coding background'],
    duration: '2 Months',
    price: '₹10,000',
    video: 'https://www.youtube.com/embed/kqtD5dpn9C8',
  },
  'Selenium Course': {
    concepts: ['Selenium WebDriver', 'Locators and XPath', 'Test Automation Framworks', 'Integration Tools', 'Scripting Language Basics'],
    benefits: ['Automative Repetitive Testing Tasks', 'Supports Multiple Browsers& Languages', 'Open-Source * Free to Use','Higb Demand in QA Jobs','Foundation for Advanced Tools'],
    duration: '2 Months',
    price: '₹10,000',
    video: 'https://www.youtube.com/embed/kqtD5dpn9C8',
  },
  'Digital Marketing': {
    concepts: ['SEO(Search Engine Optimization)', 'SEM&Paid Ads(Google Ads,Facebook Ads)', 'Social Media Marketing & Content Strategy', 'Email & Affiliate Marketing', 'Google Analytics& Conversion Tracking'],
    benefits: ['High Demand in all business sectors', 'Easy to start freelancing or online business', 'Helps increase brand visibility and reach','Measurable results with data-driven strategies','Multiple job role:Digital Marketer,SEO Analyst,Content Manager'],
    duration: '2 Months',
    price: '₹10,000',
    video: 'https://www.youtube.com/embed/kqtD5dpn9C8',
  },
  'Data Science': {
    concepts: ['Data Cleaning and Preprocessing(Python,Pands,Numpy)', 'Exploratory Data Analyst(EDA)', 'Statistical Methods and Hypothesis Testing', 'Machine Learning Algorithms(Regression,Classification)', 'Data Visualization(Matplotlib,Seaborn,Tableau'],
    benefits: ['High-paying and future-proof career', 'Skills applicable acreoos many industries(healthcare,finance,etc)', 'Strong demand  for Data Analysis and Data Scietists','Encourages critical thinking and problem-solving','Enables building predictive and data-driven applications'],
    duration: '2 Months',
    price: '₹10,000',
    video: 'https://www.youtube.com/embed/kqtD5dpn9C8',
  }
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
