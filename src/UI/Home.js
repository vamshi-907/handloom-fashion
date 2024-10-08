import React from 'react';
import './Home.css';
import Navbar from './Navbar'
import Footer from './Footer';

const App = () => {
  return (

    <div className="container">
       <Navbar />

      {/* Main Section */}
      <div className="main-section">
        <div className="text-content">
          <h1>Discover And Find Your Own Fashion</h1>
          <p>Discover the artistry of handloom, crafted with passion and tradition. Bringing timeless elegance to the modern world.</p>
          <button className="explore-button">EXPLORE NOW</button>
        </div>
        <div className="image-content">
          <img src={require('../Images/handloom_image.jpeg')} alt="Handloom Weaving" className="main-image" />
        </div>
      </div>

      {/* Best Selling Section */}
      <div className="best-selling-section">
        <h2>Best Selling</h2>
        <p>Celebrating craftsmanship, woven into every best-selling piece.</p>
        <div className="product-cards">
          <div className="card">
            <img src={require('../Images/silk_saree.jpg')} alt="Heritage Silk Saree" />
            <h3>Heritage Silk Saree Collection</h3>
            <p>$40.99</p>
            <p>5.0 ★</p>
          </div>
          <div className="card">
            <img src={require('../Images/pashmina_shawl.jpg')} alt="Pashmina Shawl" />
            <h3>Handwoven Pashmina Shawls</h3>
            <p>$79.99</p>
            <p>5.0 ★</p>
          </div>
          <div className="card">
            <img src={require('../Images/ikat_bag.jpg')} alt="Ikat Duffle Bag" />
            <h3>Classic Ikat Duffle Bags</h3>
            <p>$89.99</p>
            <p>5.0 ★</p>
          </div>
        </div>
      </div>
      < Footer />
    </div>
  );
}

export default App;
