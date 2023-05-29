import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';

import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import SignupPage from './SignupPage';

const LandingPage = () => {
  return (
    <Router>
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
        <Link to="/signup" className="cta-button">Get Started</Link>
      </header>

      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/" exact>
          <section id="features" className="features-section">
            <h2>Features</h2>
            <div className="features-shape">
              <div className="feature-item">
                <h3 className="feature-title">24/7 Surveillance</h3>
                <p className="feature-description">Stay connected and monitor your home or property from anywhere at any time using the AlectoWatch mobile app.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">Intelligent Intrusion Detection</h3>
                <p className="feature-description">AlectoWatch utilizes AI algorithms to intelligently differentiate between normal movements and potential threats, reducing false alarms and providing accurate detection and sending instant smart alerts to your smartphone if it detects any breach in your security system.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">Night Vision</h3>
                <p className="feature-description">See clearly even in low-light or dark environments with AlectoWatch's advanced night vision capabilities and communicate in real-time with anyone near the AlectoWatch cameras using the built-in two-way audio feature.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">Smart Home Integration</h3>
                <p className="feature-description">Seamlessly integrate AlectoWatch with other smart home devices, such as smart locks or lighting systems, for enhanced security and automation.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">Cloud Storage</h3>
                <p className="feature-description">Safely store and access recorded video footage in the cloud, providing an extra layer of backup and security.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">Multi-User Access</h3>
                <p className="feature-description">Share access to your AlectoWatch system with trusted family members or friends, allowing them to monitor and control security settings.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">Facial Recognition</h3>
                <p className="feature-description">The AlectoWatch system employs facial recognition technology to identify familiar faces and send customized notifications when recognized individuals are detected.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">Smart Monitoring Zones</h3>
                <p className="feature-description">By utilizing AI-based zoning, AlectoWatch enables you to define specific areas within your property for enhanced monitoring, triggering alerts and recording activities in those zones.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">Adaptive Learning</h3>
                <p className="feature-description">AlectoWatch continuously learns from user interactions and adjusts its algorithms over time to provide personalized security recommendations and improved system performance.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">Smart Insights and Recommendations</h3>
                <p className="feature-description">AlectoWatch's AI capabilities provide intelligent insights and recommendations based on user activity and security patterns, helping users optimize their security settings and improve overall home safety.</p>
              </div>
            </div>
          </section>
        </Route>
      </Switch>

      <footer className="footer">
        <p>&copy; 2023 AlectoWatch. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default LandingPage;
