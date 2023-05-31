import React from 'react';
import '../App.css';

const AdaptiveLearningPage = () => {
  const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/alectowatch.appspot.com/o/Adaptive%20Learning.jpeg?alt=media&token=db58b9ad-e0c2-4995-b9df-fd58820c6292&_gl=1*v9jbft*_ga*MTAzMzAzNjQzLjE2ODU0NzA5Mjg.*_ga_CW55HF8NVT*MTY4NTUxNDM5NC41LjEuMTY4NTUxNjAzNC4wLjAuMA..';
  return (
    <div className="feature-page">
      <h2>Adaptive Learning</h2>
      <p>
      Adaptive Learning: AlectoWatch continuously learns from user interactions and adjusts its algorithms over time to provide personalized security recommendations and improved system performance.
      </p>
      <img src={imageUrl} alt="AdaptiveLearning" className="feature-image" />
    </div>
  );
};

export default AdaptiveLearningPage;
