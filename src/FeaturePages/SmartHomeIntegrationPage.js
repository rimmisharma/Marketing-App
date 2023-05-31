import React from 'react';
import '../App.css';
const SmartHomeIntegrationPage = () => {
  const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/alectowatch.appspot.com/o/Smart%20Home%20Integration.png?alt=media&token=c5cd7b1a-c016-4937-b155-bc55aaaba7ba&_gl=1*1xrchpb*_ga*MTAzMzAzNjQzLjE2ODU0NzA5Mjg.*_ga_CW55HF8NVT*MTY4NTUxNDM5NC41LjEuMTY4NTUxNTQ0Ny4wLjAuMA..';
  return (
    <div className="feature-page">
      <h2>Smart Home Integration</h2>
      <p>
      Smart Home Integration: Seamlessly integrate AlectoWatch with other smart home devices, such as smart locks or lighting systems, for enhanced security and automation.
      </p>
      <img src={imageUrl} alt="SmartHomeIntegration" className="feature-image" />
    </div>
  );
};

export default SmartHomeIntegrationPage;
