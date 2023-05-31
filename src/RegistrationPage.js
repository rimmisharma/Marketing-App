import React, { useState } from 'react';
import { auth, firestore, getUserByEmail } from './firebaseConfig';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Check if the email is already registered
      const existingUser = await getUserByEmail(email);
      if (existingUser) {
        alert('This email is already registered.');
        return;
      }

      // Register the user using Firebase authentication
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      // Create a new document in the "users" collection in Firestore
      await firestore.collection('users').doc(user.uid).set({
        username,
        email,
      });

      // Reset the form fields after successful registration
      setUsername('');
      setEmail('');
      setPassword('');

      // Redirect the user to a success page or perform any other action
      // You can navigate to another page using a router or show a success message
      alert('Registration successful!');
    } catch (error) {
      console.error('Error registering user:', error.message);
      // Handle the error and display an error message to the user
    }
  };

  return (
    <div className="registration-container">
      <h2>Sign Up</h2>
      <form className="registration-form" onSubmit={handleRegister}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
