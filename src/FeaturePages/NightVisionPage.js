import React from 'react';
import '../App.css';
const NightVisionPage = () => {
  const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/alectowatch.appspot.com/o/Night%20Vision.jpg?alt=media&token=8c50255c-c712-4233-85a1-a16ad2229af1&_gl=1*pkfnrp*_ga*MTAzMzAzNjQzLjE2ODU0NzA5Mjg.*_ga_CW55HF8NVT*MTY4NTUxNDM5NC41LjEuMTY4NTUxNTI2MC4wLjAuMA..';
  return (
    <div className="feature-page">
      <h2>Night Vision</h2>
      <p>
      Night Vision: See clearly even in low-light or dark environments with AlectoWatch's advanced night vision capabilities and communicate in real-time with anyone near the AlectoWatch cameras using the built-in two-way audio feature.
      </p>
      <img src={imageUrl} alt="NightVision" className="feature-image" />
    </div>
  );
};

export default NightVisionPage;
