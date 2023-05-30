import React from 'react';
import '../App.css';
import surveillanceImage from '../Images/Adaptive Learning.jpeg';

const Feature6Page = () => {
  return (
    <div className="feature-page">
      <h2>Adaptive Learning</h2>
      <p>
      Adaptive Learning: AlectoWatch continuously learns from user interactions and adjusts its algorithms over time to provide personalized security recommendations and improved system performance.
      </p>
      <img src={surveillanceImage} alt="Surveillance" className="feature-image" />
    </div>
  );
};

export default Feature6Page;
