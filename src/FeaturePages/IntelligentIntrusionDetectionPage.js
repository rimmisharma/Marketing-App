import React from 'react';
import '../App.css';

const IntelligentIntrusionDetectionPage = () => {
  const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/alectowatch.appspot.com/o/Intelligent%20Intrusion%20Detection.jpeg?alt=media&token=df1c4bcf-6460-4e23-948e-e937067888ca&_gl=1*1wacmie*_ga*MTAzMzAzNjQzLjE2ODU0NzA5Mjg.*_ga_CW55HF8NVT*MTY4NTUxNDM5NC41LjEuMTY4NTUxNTE2Ny4wLjAuMA..';
  return (
    <div className="feature-page">
      <h2>Intelligent Intrusion Detection</h2>
      <p>
      Intelligent Intrusion Detection: AlectoWatch utilizes AI algorithms to intelligently differentiate between normal movements and potential threats, reducing false alarms and providing accurate detection and sending instant smart alerts to your smartphone if it detects any breach in your security system.
      </p>
      <img src={imageUrl} alt="IntelligentIntrusionDetection" className="feature-image" />
    </div>
  );
};

export default IntelligentIntrusionDetectionPage;