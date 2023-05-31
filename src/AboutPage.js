import React, { useState } from 'react';
import './App.css';

const AboutPage = () => {
  const [showEffect, setShowEffect] = useState(false);

  const handleButtonClick = () => {
    setShowEffect(true);
  };

  return (
    <div className="about-page">
      <h2>About AlectoWatch</h2>
      <p>
        AlectoWatch is an innovative home security system that offers advanced features to protect your property and loved ones.
        With cutting-edge technology and intelligent monitoring capabilities, AlectoWatch ensures your home's safety and provides you with peace of mind.
        Whether it's real-time surveillance, smart access control, or personalized security recommendations, AlectoWatch has you covered.
      </p>

      <button onClick={handleButtonClick}>Click Me to get exclusive offer for you!</button>

      {showEffect && (
        <div className="effect">
          <p>You will get exclusive 20% discount if you buy AlectoWatch using Axis bank credit card!</p>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
