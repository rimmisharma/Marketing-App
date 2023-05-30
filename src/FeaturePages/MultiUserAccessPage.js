import React from 'react';
import '../App.css';
import surveillanceImage from '../Images/Multi-User Access.png';

const Feature6Page = () => {
  return (
    <div className="feature-page">
      <h2>Multi-User Access</h2>
      <p>
      Multi-User Access: Share access to your AlectoWatch system with trusted family members or friends, allowing them to monitor and control security settings.
      </p>
      <img src={surveillanceImage} alt="Surveillance" className="feature-image" />
    </div>
  );
};

export default Feature6Page;
