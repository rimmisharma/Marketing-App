import React from 'react';
import './App.css'; // Import the CSS file

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
