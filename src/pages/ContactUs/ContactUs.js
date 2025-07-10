import React from 'react';
import './ContactUs.css';
import Footer from '../../components/Footer/Footer';

const ContactUs = () => {
  return (
    <div>
    <div className="contact-container">
      {/* Left Section: Form */}
      <div className="contact-form-section">
        <h2 className="gradient-text">Get In Touch.</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="5" />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Right Section: Contact Info */}
      <div className="contact-info-section">
        <h2 className="gradient-text">Contact Info.</h2>
        <p><strong>Let's Talk.</strong></p>
        <p><strong>Office Address.</strong></p>
        <p>Cohort work space,4th Floor,2/91/20,BP Raju Marg,Laxmi Cyber City,Whitefields,Kondapur<br />Hyderabad - 500081 Telangana</p>
        <p>https://mnssolutionsgroup</p>
        <p>+91 6305427016</p>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default ContactUs;
