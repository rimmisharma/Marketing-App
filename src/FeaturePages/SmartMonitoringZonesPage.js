import React from 'react';
import '../App.css';

const SmartMonitoringZonesPage = () => {
  const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/alectowatch.appspot.com/o/Smart%20Monitoring%20Zones.png?alt=media&token=80ee9736-ce80-433f-813e-c9fdd755d3f3&_gl=1*z75yn9*_ga*MTAzMzAzNjQzLjE2ODU0NzA5Mjg.*_ga_CW55HF8NVT*MTY4NTUxNDM5NC41LjEuMTY4NTUxNTk4MC4wLjAuMA..';
  return (
    <div className="feature-page">
      <h2>Smart Monitoring Zones</h2>
      <p>
      Smart Monitoring Zones: By utilizing AI-based zoning, AlectoWatch enables you to define specific areas within your property for enhanced monitoring, triggering alerts and recording activities in those zones.
      </p>
      <img src={imageUrl} alt="SmartMonitoringZones" className="feature-image" />
    </div>
  );
};

export default SmartMonitoringZonesPage;
