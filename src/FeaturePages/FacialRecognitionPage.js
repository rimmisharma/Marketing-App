import React from 'react';
import '../App.css';

const FacialRecognitionPage = () => {
  const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/alectowatch.appspot.com/o/Facial%20Recognition.jpg?alt=media&token=1149198e-02da-4cd0-bb3a-0c00cfc1814d&_gl=1*lzmmps*_ga*MTAzMzAzNjQzLjE2ODU0NzA5Mjg.*_ga_CW55HF8NVT*MTY4NTUxNDM5NC41LjEuMTY4NTUxNTg0NC4wLjAuMA..';
  return (
    <div className="feature-page">
      <h2>Facial Recognition</h2>
      <p>
      Facial Recognition: The AlectoWatch system employs facial recognition technology to identify familiar faces and send customized notifications when recognized individuals are detected.
      </p>
      <img src={imageUrl} alt="FacialRecognition" className="feature-image" />
    </div>
  );
};

export default FacialRecognitionPage;
