import React, { useState } from 'react';
import { auth, getUserByEmail } from './firebaseConfig';
import { useHistory, Link } from 'react-router-dom';

const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // Check if the email is registered
      const existingUser = await getUserByEmail(email);
      if (!existingUser) {
        alert('This email is not registered.');
        return;
      }

      // Sign in the user using Firebase authentication
      await auth.signInWithEmailAndPassword(email, password);

      // Reset the form fields after successful sign-in
      setEmail('');
      setPassword('');

      // Redirect the user to the WelcomePage
      history.push('/welcome');
    } catch (error) {
      console.error('Error signing in:', error.message);
      // Handle the error and display an error message to the user
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form className="signin-form" onSubmit={handleSignIn}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <div className="register-link">
        <p>Don't have an account? <Link to="/registration">Register</Link></p>
      </div>
    </div>
  );
};

export default SigninPage;
