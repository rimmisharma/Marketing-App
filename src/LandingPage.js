import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';

import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import SignupPage from './SignupPage';
import Surveillance from './FeaturePages/SurveillancePage';
import IntelligentIntrusionDetection from './FeaturePages/IntelligentIntrusionDetectionPage';
import NightVision from './FeaturePages/NightVisionPage';
import SmartHomeIntegration from './FeaturePages/SmartHomeIntegrationPage';
import CloudStorage from './FeaturePages/CloudStoragePage';
import MultiUserAccess from './FeaturePages/MultiUserAccessPage';
import FacialRecognition from './FeaturePages/FacialRecognitionPage';
import SmartMonitoringZones from './FeaturePages/SmartMonitoringZonesPage';
import AdaptiveLearning from './FeaturePages/AdaptiveLearningPage';
import SmartInsightsAndRecommendations from './FeaturePages/SmartInsightsAndRecommendationsPage';
// Import other feature pages here

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
        <Route path="/surveillance" component={Surveillance} />
        <Route path="/IntelligentIntrusionDetection" component={IntelligentIntrusionDetection} />
        <Route path="/NightVision" component={NightVision} />
        <Route path="/SmartHomeIntegration" component={SmartHomeIntegration} />
        <Route path="/CloudStorage" component={CloudStorage} />
        <Route path="/MultiUserAccess" component={MultiUserAccess} />
        <Route path="/FacialRecognition" component={FacialRecognition} />
        <Route path="/SmartMonitoringZones" component={SmartMonitoringZones} />
        <Route path="/AdaptiveLearning" component={AdaptiveLearning} />
        <Route path="/SmartInsightsAndRecommendations" component={SmartInsightsAndRecommendations} />
        {/* Add other feature routes here */}
        <Route path="/" exact>
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
        </Route>
      </Switch>

      <footer className="footer">
        <p>&copy; 2023 AlectoWatch. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default LandingPage;
