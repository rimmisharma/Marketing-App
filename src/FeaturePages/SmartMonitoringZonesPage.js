import React from 'react';
import '../App.css';
import surveillanceImage from '../Images/Smart Monitoring Zones.png';

const Feature8Page = () => {
  return (
    <div className="feature-page">
      <h2>Smart Monitoring Zones</h2>
      <p>
      Smart Monitoring Zones: By utilizing AI-based zoning, AlectoWatch enables you to define specific areas within your property for enhanced monitoring, triggering alerts and recording activities in those zones.
      </p>
      <img src={surveillanceImage} alt="Surveillance" className="feature-image" />
    </div>
  );
};

export default Feature8Page;
