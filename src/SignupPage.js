// SignupPage.js
import React from 'react';
import './App.css'; // Import the App.css file

const SignupPage = () => {
  return (
    <div className="signup-container"> {/* Apply the 'signup-container' class */}
      <h2>Sign Up / Sign In</h2>
      {/* Add your signup and signin forms here */}
      <form>
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignupPage;
