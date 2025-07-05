import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Training.css';

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

const Training = () => {
    return (
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
                        <p><i className="fas fa-phone"></i> +91 98765 43210</p>
                        <p><i className="fas fa-envelope"></i> info@nms-solutions.com</p>
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
