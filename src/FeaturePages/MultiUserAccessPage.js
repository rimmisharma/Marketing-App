import React from 'react';
import '../App.css';

const MultiUserAccessPage = () => {
  const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/alectowatch.appspot.com/o/Multi-User%20Access.png?alt=media&token=8a10640e-d55d-4d82-a0c3-5689979dd0d7&_gl=1*9zp69c*_ga*MTAzMzAzNjQzLjE2ODU0NzA5Mjg.*_ga_CW55HF8NVT*MTY4NTUxNDM5NC41LjEuMTY4NTUxNTcxNi4wLjAuMA..';
  return (
    <div className="feature-page">
      <h2>Multi-User Access</h2>
      <p>
      Multi-User Access: Share access to your AlectoWatch system with trusted family members or friends, allowing them to monitor and control security settings.
      </p>
      <img src={imageUrl} alt="MultiUserAccess" className="feature-image" />
    </div>
  );
};

export default MultiUserAccessPage;
