import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';

import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import SignupPage from './SignupPage';
import Feature1Page from './Feature1Page';
import Feature2Page from './Feature2Page';
import Feature3Page from './Feature3Page';
import Feature4Page from './Feature4Page';
import Feature5Page from './Feature5Page';
import Feature6Page from './Feature6Page';
import Feature7Page from './Feature7Page';
import Feature8Page from './Feature8Page';
import Feature9Page from './Feature9Page';
import Feature10Page from './Feature10Page';
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
        <Route path="/feature1" component={Feature1Page} />
        <Route path="/feature2" component={Feature2Page} />
        <Route path="/feature3" component={Feature3Page} />
        <Route path="/feature4" component={Feature4Page} />
        <Route path="/feature5" component={Feature5Page} />
        <Route path="/feature6" component={Feature6Page} />
        <Route path="/feature7" component={Feature7Page} />
        <Route path="/feature8" component={Feature8Page} />
        <Route path="/feature9" component={Feature9Page} />
        <Route path="/feature10" component={Feature10Page} />
        {/* Add other feature routes here */}
        <Route path="/" exact>
          <section id="features" className="features-section">
            <h2>Features</h2>
            <ul>
              <li><Link to="/feature1">24/7 Surveillance</Link></li>
              <li><Link to="/feature2">Intelligent Intrusion Detection</Link></li>
              <li><Link to="/feature3">Night Vision</Link></li>
              <li><Link to="/feature4">Smart Home Integration</Link></li>
              <li><Link to="/feature5">Cloud Storage</Link></li>
              <li><Link to="/feature6">Multi-User Access</Link></li>
              <li><Link to="/feature7">Facial Recognition</Link></li>
              <li><Link to="/feature8">Smart Monitoring Zones</Link></li>
              <li><Link to="/feature9">Adaptive Learning</Link></li>
              <li><Link to="/feature10">Smart Insights and Recommendations</Link></li>
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
