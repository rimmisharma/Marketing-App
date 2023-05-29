// LandingPage.js
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css'; // Import the App.css file

import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import SignupPage from './SignupPage';

const LandingPage = () => {
  return (
    <Router>
      <header className="header"> {/* Apply the 'header' class */}
        <nav className="navbar"> {/* Apply the 'navbar' class */}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <h1 className="title">AlectoWatch</h1> {/* Apply the 'title' class */}
        <p className="subtitle">Defend with Trend</p> {/* Apply the 'subtitle' class */}
        <Link to="/signup" className="cta-button">Get Started</Link> {/* Apply the 'cta-button' class */}
      </header>

      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/" exact>
          <section id="features" className="features-section"> {/* Apply the 'features-section' class */}
            <h2>Features</h2>
            <ul>
              <li>24/7 real-time monitoring</li>
              <li>AI-powered facial recognition</li>
              <li>Intelligent access control</li>
              <li>Smart motion sensors</li>
              <li>Real-time alerts and notifications</li>
            </ul>
          </section>
        </Route>
      </Switch>

      <footer className="footer"> {/* Apply the 'footer' class */}
        <p>&copy; 2023 AlectoWatch. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default LandingPage;
