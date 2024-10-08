import React from 'react';
import './ArtisanProfiles.css';
import Navbar from './Navbar'; // Assuming Navbar component exists
import Footer from './Footer';

const ArtisanProfiles = () => {
  return (
    <div className="container">
      <Navbar />

      <div className="artisan-profiles-section">
        <h2>Artisan Profiles</h2>

        {/* Artisan Profile 1 */}
        <div className="artisan-card">
          <h3>Artisan Profile for Banarasi Silk Sarees:</h3>
          <p>
            Our skilled artisans, hailing from the historic city of Varanasi, have been weaving exquisite Banarasi Silk Sarees for generations. With a deep understanding of traditional handloom techniques, they create masterpieces using fine silk and intricate zari work. Each saree showcases detailed patterns inspired by Mughal architecture, florals, and motifs, crafted with patience and precision. The artisans' craftsmanship reflects their rich cultural heritage, and their attention to detail brings elegance and luxury to every Banarasi Silk Saree they produce.
          </p>
          <img src={require('../Images/artisan_banarasi.jpg')} alt="Banarasi Artisan" className="artisan-image" />
        </div>

        {/* Artisan Profile 2 */}
        <div className="artisan-card">
          <h3>Artisan Profile for Chanderi Fabric:</h3>
          <p>
            The artisans behind Chanderi Fabric hail from the small town of Chanderi in Madhya Pradesh, where the weaving tradition has been passed down through generations. These skilled craftsmen combine silk and cotton to create a fabric that is lightweight, sheer, and adorned with intricate handwoven motifs. Their craftsmanship is renowned for its delicate texture and glossy finish, making each piece of Chanderi fabric a masterpiece of elegance and grace. The artisans' meticulous attention to detail ensures that every fabric embodies the timeless heritage of Chanderi weaving.
          </p>
          <img src={require('../Images/artisan_chanderi.jpg')} alt="Chanderi Artisan" className="artisan-image" />
        </div>
      </div>
      < Footer />
    </div>
  );
}

export default ArtisanProfiles;
