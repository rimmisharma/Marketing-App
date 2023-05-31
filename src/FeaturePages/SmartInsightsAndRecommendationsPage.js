import React from 'react';
import '../App.css';

const SmartInsightsAndRecommendationsPage = () => {
  const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/alectowatch.appspot.com/o/Smart%20Insights%20and%20Recommendations.jpg?alt=media&token=79d3cc1b-d7e0-476c-b47c-533f0fbcc94a&_gl=1*oc3f47*_ga*MTAzMzAzNjQzLjE2ODU0NzA5Mjg.*_ga_CW55HF8NVT*MTY4NTUxNDM5NC41LjEuMTY4NTUxNjEzMy4wLjAuMA..';
  return (
    <div className="feature-page">
      <h2>Smart Insights and Recommendations</h2>
      <p>
      Smart Insights and Recommendations: AlectoWatch's AI capabilities provide intelligent insights and recommendations based on user activity and security patterns, helping users optimize their security settings and improve overall home safety.
      </p>
      <img src={imageUrl} alt="SmartInsightsAndRecommendations" className="feature-image" />
    </div>
  );
};

export default SmartInsightsAndRecommendationsPage;
