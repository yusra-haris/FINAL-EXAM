// src/Pages/ThankYou.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Thankyou.css';  // Add necessary styles for ThankYou page

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <h2>Thank You for Your Purchase!</h2>
      <p>Your order has been confirmed. We hope you enjoy your products!</p>
      <Link to="/" className="go-home-btn">Go Back to Home</Link>
    </div>
  );
};

export default ThankYou;
