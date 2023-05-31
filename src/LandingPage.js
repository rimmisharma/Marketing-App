import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const LandingPage = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <h1 className="title">AlectoWatch</h1>
        <p className="subtitle">Defend with Trend</p>
        <Link to="/signin" className="cta-button">Get Started</Link>
      </header>

      <section id="features" className="features-section">
        <h2>Features</h2>
        <ul>
          <li><Link to="/surveillance">24/7 Surveillance</Link></li>
          <li><Link to="/IntelligentIntrusionDetection">Intelligent Intrusion Detection</Link></li>
          <li><Link to="/NightVision">Night Vision</Link></li>
          <li><Link to="/SmartHomeIntegration">Smart Home Integration</Link></li>
          <li><Link to="/CloudStorage">Cloud Storage</Link></li>
          <li><Link to="/MultiUserAccess">Multi-User Access</Link></li>
          <li><Link to="/FacialRecognition">Facial Recognition</Link></li>
          <li><Link to="/SmartMonitoringZones">Smart Monitoring Zones</Link></li>
          <li><Link to="/AdaptiveLearning">Adaptive Learning</Link></li>
          <li><Link to="/SmartInsightsAndRecommendations">Smart Insights and Recommendations</Link></li>
          {/* Add other features here */}
        </ul>
      </section>

      <footer className="footer">
        <p>&copy; 2023 AlectoWatch. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
