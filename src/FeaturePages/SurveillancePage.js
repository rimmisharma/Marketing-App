import React from 'react';
import '../App.css';
import surveillanceImage from '../Images/24-7.png';

const SurveillancePage = () => {
  return (
    <div className="feature-page">
      <h2>24/7 Surveillance</h2>
      <p>
        24/7 Surveillance: Stay connected and monitor your home or property from anywhere at any time using the AlectoWatch mobile app.
      </p>
      <img src={surveillanceImage} alt="Surveillance" className="feature-image" />
    </div>
  );
};

export default SurveillancePage;
