import React from 'react';
import '../App.css';

const CloudStoragePage = () => {
  const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/alectowatch.appspot.com/o/Cloud%20Storage.jpg?alt=media&token=1b4140b3-1311-45d0-80a0-59d4a7a46ad4&_gl=1*chniyy*_ga*MTAzMzAzNjQzLjE2ODU0NzA5Mjg.*_ga_CW55HF8NVT*MTY4NTUxNDM5NC41LjEuMTY4NTUxNTYxNi4wLjAuMA..';
  return (
    <div className="feature-page">
      <h2>Cloud Storage</h2>
      <p>
      Cloud Storage: Safely store and access recorded video footage in the cloud, providing an extra layer of backup and security
      </p>
      <img src={imageUrl} alt="CloudStorage" className="feature-image" />
    </div>
  );
};

export default CloudStoragePage;
