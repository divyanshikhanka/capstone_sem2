import React from 'react';
import '../styles/about.css';

function About() {
  return (
    <div className="about about-section">
      <div className="about-content">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Hot air balloons" />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <div className="about-underline"></div>
          <h3 className="about-highlight">At Trip Tailor, we believe that every traveller deserves a journey that is uniquely theirs.</h3>
          <p>Whether you are dreaming of sun-kissed beaches, bustling cityscapes, or serene mountain retreats, our platform helps you discover destinations that perfectly match your vibe, budget, and adventure style.</p>
          <p>We go beyond typical travel searches, our smart filters and personalized recommendations make planning your next escape effortless and exciting. From hidden gems to world-famous spots, we are here to guide you toward your perfect getaway.</p>
          <p>Start exploring with us and turn your travel dreams into unforgettable memories.</p>
          <div className="about-stats">
            <div className="about-stat"><span>500+</span><br/>Destinations</div>
            <div className="about-stat"><span>10k+</span><br/>Happy Travelers</div>
            <div className="about-stat"><span>100%</span><br/>Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
