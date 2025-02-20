import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Navbar.css';  // Add your custom CSS here

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>GuTech Exam Store</h1>
      </div>
      <div className="navbar-right">
        <Link to="/" className="nav-link">Home</Link>  {/* Link to the Home page */}
        <Link to="/cart" className="nav-link">Cart</Link>  {/* Link to the Cart page */}
      </div>
    </div>
  );
};

export default Navbar;
