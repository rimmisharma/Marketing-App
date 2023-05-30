import React from 'react';
import '../App.css';
import surveillanceImage from '../Images/Cloud Storage.jpg';

const Feature5Page = () => {
  return (
    <div className="feature-page">
      <h2>Cloud Storage</h2>
      <p>
      Cloud Storage: Safely store and access recorded video footage in the cloud, providing an extra layer of backup and security
      </p>
      <img src={surveillanceImage} alt="Surveillance" className="feature-image" />
    </div>
  );
};

export default Feature5Page;
