import React from 'react';
import '../App.css';
import surveillanceImage from '../Images/Night Vision.jpg';

const Feature3Page = () => {
  return (
    <div className="feature-page">
      <h2>Night Vision</h2>
      <p>
      Night Vision: See clearly even in low-light or dark environments with AlectoWatch's advanced night vision capabilities and communicate in real-time with anyone near the AlectoWatch cameras using the built-in two-way audio feature.
      </p>
      <img src={surveillanceImage} alt="Surveillance" className="feature-image" />
    </div>
  );
};

export default Feature3Page;
