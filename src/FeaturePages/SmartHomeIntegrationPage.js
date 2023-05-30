import React from 'react';
import '../App.css';
import surveillanceImage from '../Images/Smart Home Integration.png';

const Feature4Page = () => {
  return (
    <div className="feature-page">
      <h2>Smart Home Integration</h2>
      <p>
      Smart Home Integration: Seamlessly integrate AlectoWatch with other smart home devices, such as smart locks or lighting systems, for enhanced security and automation.
      </p>
      <img src={surveillanceImage} alt="Surveillance" className="feature-image" />
    </div>
  );
};

export default Feature4Page;
