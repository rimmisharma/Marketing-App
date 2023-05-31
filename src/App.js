import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import SigninPage from './SigninPage';
import RegistrationPage from './RegistrationPage';
import WelcomePage from './WelcomePage';
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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/signin" component={SigninPage} />
        <Route exact path="/registration" component={RegistrationPage} />
        <Route exact path="/welcome" component={WelcomePage} />
        <Route exact path="/surveillance" component={Surveillance} />
        <Route exact path="/IntelligentIntrusionDetection" component={IntelligentIntrusionDetection} />
        <Route exact path="/NightVision" component={NightVision} />
        <Route exact path="/SmartHomeIntegration" component={SmartHomeIntegration} />
        <Route exact path="/CloudStorage" component={CloudStorage} />
        <Route exact path="/MultiUserAccess" component={MultiUserAccess} />
        <Route exact path="/FacialRecognition" component={FacialRecognition} />
        <Route exact path="/SmartMonitoringZones" component={SmartMonitoringZones} />
        <Route exact path="/AdaptiveLearning" component={AdaptiveLearning} />
        <Route exact path="/SmartInsightsAndRecommendations" component={SmartInsightsAndRecommendations} />
      </Switch>
    </Router>
  );
}

export default App;
