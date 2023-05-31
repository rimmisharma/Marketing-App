import React from 'react';
import '../App.css';

const SurveillancePage = () => {
  const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/alectowatch.appspot.com/o/24-7.png?alt=media&token=116ed5b4-c08b-4bc2-a5fc-3fb2b6a91fd5&_gl=1*fgc1lo*_ga*MTAzMzAzNjQzLjE2ODU0NzA5Mjg.*_ga_CW55HF8NVT*MTY4NTUxNDM5NC41LjEuMTY4NTUxNDYxMi4wLjAuMA..';
  return (
    <div className="feature-page">
      <h2>24/7 Surveillance</h2>
      <p>
        24/7 Surveillance: Stay connected and monitor your home or property from anywhere at any time using the AlectoWatch mobile app.
      </p>
      <img src={imageUrl} alt="Surveillance" className="feature-image" />
    </div>
  );
};

export default SurveillancePage;
