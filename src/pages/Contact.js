import React from 'react';
import '../styles/contact.css';

function Contact() {
  return (
    <div className="contact contact-section">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Have questions about a destination? Need help planning your trip? Our travel experts are here to help you create the perfect getaway.</p>
          <div className="contact-detail"><span className="contact-icon">📍</span><b>Address</b><br/>Newton School of Technology</div>
          <div className="contact-detail"><span className="contact-icon">✉️</span><b>Email</b><br/>maiHuGian@gmail.com</div>
          <div className="contact-detail"><span className="contact-icon">📞</span><b>Phone</b><br/>+91 9259540810</div>
        </div>
        <form className="contact-form">
          <label>Your Name
            <input type="text" placeholder="Enter your name...." required />
          </label>
          <label>Email Address
            <input type="email" placeholder="Enter your email address...." required />
          </label>
          <label>Message
            <textarea placeholder="Enter your message...." required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
