import React from 'react';
import '../App.css';
import IntelligentIntrusionDetectionImage from '../Images/Intelligent Intrusion Detection.jpeg';

const IntelligentIntrusionDetectionPage = () => {
  return (
    <div className="feature-page">
      <h2>Intelligent Intrusion Detection</h2>
      <p>
      Intelligent Intrusion Detection: AlectoWatch utilizes AI algorithms to intelligently differentiate between normal movements and potential threats, reducing false alarms and providing accurate detection and sending instant smart alerts to your smartphone if it detects any breach in your security system.
      </p>
      <img src={IntelligentIntrusionDetectionImage} alt="IntelligentIntrusionDetection" className="feature-image" />
    </div>
  );
};

export default IntelligentIntrusionDetectionPage;