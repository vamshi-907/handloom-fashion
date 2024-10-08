import React from 'react';
import './Aboutus.css';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    
    <div className="about-container">
        <Navbar/>
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>At Handloom Products, we cherish tradition and quality. Our artisans are at the heart of everything we do, creating exquisite handloom fabrics that celebrate the beauty of craftsmanship and heritage.</p>
        </div>
      </section>
      
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>To empower artisans across India by providing them with a platform to showcase their work, while preserving and promoting the handloom traditions that have been passed down through generations.</p>
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>We envision a world where traditional craftsmanship meets modern sensibilities, where handmade goods are valued, and where artisans are empowered economically and socially.</p>
      </section>
      < Footer />

    </div>
  );
}

export default AboutUs;
