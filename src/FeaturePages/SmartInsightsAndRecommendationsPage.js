import React from 'react';
import '../App.css';
import surveillanceImage from '../Images/Smart Insights and Recommendations.jpg';

const Feature8Page = () => {
  return (
    <div className="feature-page">
      <h2>Smart Insights and Recommendations</h2>
      <p>
      Smart Insights and Recommendations: AlectoWatch's AI capabilities provide intelligent insights and recommendations based on user activity and security patterns, helping users optimize their security settings and improve overall home safety.
      </p>
      <img src={surveillanceImage} alt="Surveillance" className="feature-image" />
    </div>
  );
};

export default Feature8Page;
