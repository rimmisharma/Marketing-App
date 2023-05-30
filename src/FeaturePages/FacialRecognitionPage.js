import React from 'react';
import '../App.css';
import surveillanceImage from '../Images/Facial Recognition.jpg';

const Feature6Page = () => {
  return (
    <div className="feature-page">
      <h2>Facial Recognition</h2>
      <p>
      Facial Recognition: The AlectoWatch system employs facial recognition technology to identify familiar faces and send customized notifications when recognized individuals are detected.
      </p>
      <img src={surveillanceImage} alt="Surveillance" className="feature-image" />
    </div>
  );
};

export default Feature6Page;
