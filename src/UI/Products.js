import React from 'react';
import './Products.css';
import Navbar from './Navbar'; 
import Footer from './Footer';

const OurProducts = () => {
  return (
    <div className="container">
      <Navbar />

      <div className="our-products-section">
        <h2>Our Products</h2>

        {/* Product Card 1 */}
        <div className="product-card">
          <img src={require('../Images/sare.jpg')} alt="Banarasi Silk Saree" className="product-image" />
          <div className="product-info">
            <h3>Banarasi Silk Saree</h3>
            <p>
              Banarasi Silk Sarees are renowned for their intricate gold and silver brocade, fine silk, and opulent designs, symbolizing Indian heritage and luxury.
            </p>
            <div className="product-rating">
              <span>4.5 ★</span> <small>4,000+ Ratings & 1,000+ reviews</small>
            </div>
            <div className="product-price">$99.00</div>
            <div className="product-offers">
              <p>Available Offers:</p>
              <ul>
                <li>10% off up to $9 on HDFC Bank Credit Card Transactions. Min Txn Value: $79</li>
                <li>5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
                <li><a href="target-page">View 5 more offers</a></li>
              </ul>
            </div>
            <div className="product-buttons">
              <button className="buy-now-btn">BUY NOW</button>
              <button className="add-to-cart-btn">ADD TO CART</button>
            </div>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="product-card">
          <img src={require('../Images/chanderi_fabric.jpg')} alt="Chanderi Fabric" className="product-image" />
          <div className="product-info">
            <h3>Chanderi Fabric</h3>
            <p>
              Chanderi Fabric is known for its lightweight texture, sheer quality, and intricate handwoven patterns, blending silk and cotton with a glossy finish.
            </p>
            <div className="product-rating">
              <span>4.5 ★</span> <small>3,090+ Ratings & 2,078+ reviews</small>
            </div>
            <div className="product-price">$89.00</div>
            <div className="product-offers">
              <p>Available Offers:</p>
              <ul>
                <li>10% off up to $9 on HDFC Bank Credit Card Transactions. Min Txn Value: $69</li>
                <li>5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
                <li><a href="/target-page">View 5 more offers</a></li>
              </ul>
            </div>
            <div className="product-buttons">
              <button className="buy-now-btn">BUY NOW</button>
              <button className="add-to-cart-btn">ADD TO CART</button>
            </div>
          </div>
        </div>

      </div>
      < Footer />
    </div>
  );
}

export default OurProducts;
