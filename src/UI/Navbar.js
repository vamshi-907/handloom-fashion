import React from 'react';
import './Navbar.css';

const App = () => {
  return (
    <div className="container">
     
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Handloom Products</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Buy Products</a></li>
          <li><a href="/artisanprofiles">Artisan Profiles</a></li>
          <li><a href="/aboutUs">About Us</a></li>
        </ul>
        <div className="auth-buttons">
          <a href="/login" className="login-button">LOGIN</a>
          <a href="/signup" className="signup-button">Sign Up</a>
        </div>
      </nav>
    </div>
  );
}

export default App;
