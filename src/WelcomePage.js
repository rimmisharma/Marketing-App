import React, { useEffect, useState } from 'react';

const WelcomePage = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Get current time
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    }, 1000);

    // Get user's location
    fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then((data) => {
        const location = `${data.city}, ${data.region}, ${data.country}`;
        setUserLocation(location);
      })
      .catch((error) => {
        console.error('Error fetching user location:', error);
      });

    // Get window size
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="welcome-container">
      <h2>Welcome!</h2>
      <p className="welcome-description">Discover the best in home security.</p>
      <div className="current-time">
        <p>Current Time: {currentTime}</p>
        <button onClick={() => setCurrentTime(new Date().toLocaleTimeString())}>Refresh Time</button>
      </div>
      <p className="user-location">User Location: {userLocation}</p>
      <p className="window-size">Window Size: {windowSize.width} x {windowSize.height}</p>
    </div>
  );
};

export default WelcomePage;
