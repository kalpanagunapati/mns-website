// src/components/Footer.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'; // Create this CSS file or move your existing footer styles here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About MNS</h3>
          <p>
            MNS SOLUTIONS is a premier software training institute in Hyderabad,
            dedicated to upskilling aspiring developers and professionals with
            cutting-edge technologies.
          </p>
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
          <p><i className="fas fa-map-marker-alt"></i> Kondapur, Hyderabad, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MNS Solutions | All Rights Reserved. Kalpana</p>
      </div>
    </footer>
  );
};

export default Footer;
