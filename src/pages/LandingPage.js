import React from "react";
import "../styles/landing.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <section className="landing">
      <div className="hero-content">
        <h1>Find Your Perfect Getaway ~ Tailored Just for You</h1>
        <p>Discover destinations that match your vibe, budget, and adventure style</p>
        <button className="get-started-btn" onClick={() => navigate('/explore')}>Get Started</button>
      </div>
    </section>
  );
}

export default LandingPage;
