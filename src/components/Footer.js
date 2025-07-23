import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer dark-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h3>Trip Tailor</h3>
          <p>Your journey, your way.</p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Travel Guides</a></li>
            <li><a href="#">Travel Tips</a></li>
            <li><a href="#">Accommodations</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Partnerships</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Services</a></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h4>Subscribe to our newsletter</h4>
          <p>Get travel inspiration, tips and exclusive offers sent straight to your inbox</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="#" aria-label="Facebook">&#xf09a;</a>
          <a href="#" aria-label="Twitter">&#xf099;</a>
          <a href="#" aria-label="Instagram">&#xf16d;</a>
          <a href="#" aria-label="Pinterest">&#xf0d2;</a>
        </div>
        <div className="footer-copyright">
          &copy; 2025 Trip Tailor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
