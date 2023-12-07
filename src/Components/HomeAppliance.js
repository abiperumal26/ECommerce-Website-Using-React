// HomeAppliance.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import H1 from './Images/H1.webp';
import H2 from './Images/H2.webp';
import H3 from './Images/H3.webp';
import H4 from './Images/H4.webp';
import H5 from './Images/H5.webp';
import H6 from './Images/H6.webp';
import H7 from './Images/H7.webp';
import H8 from './Images/H8.webp';
import H9 from './Images/H9.webp';
import H10 from './Images/H10.webp';
import H11 from './Images/H11.webp';
import H12 from './Images/H12.webp';
import './HomeAppli.css';

// Placeholder data for products
const products = [
  { id: 1, name: 'Diamond Drum Front Load', price: '₹28,000', image: H1 },
  { id: 2, name: 'Livpure', price: '₹15,000', image: H2 },
  { id: 3, name: 'Water Pruifier', price: '₹18,000', image: H3 },
  { id: 4, name: 'Usha IronBox', price: '₹3,000', image: H4 },
  { id: 5, name: 'Vaccum Cleaner', price: '₹7,000', image: H5 },
  { id: 6, name: 'Water Purifier', price: '₹15,000', image: H6 },
  { id: 7, name: 'Machine', price: '₹20,000', image: H7 },
  { id: 8, name: 'IFB', price: '₹35,000', image: H8 },
  { id: 9, name: 'Vaccum', price: '₹9,000', image: H9 },
  { id: 10, name: 'Venus', price: '₹10,000', image: H10 },
  { id: 11, name: 'Filter', price: '₹8,000', image: H11 },
  { id: 12, name: 'Ac', price: '₹45,000', image: H12 },
  // Add more products as needed
];

const HomeAppliance = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  // const navigate = useNavigate(); // eslint-disable-line

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
  };

  const handleOpenCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₹', '')) * item.quantity, 0);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter(item => item.id !== productId));
  };

  return (
    <div className="gadture-container">
      {products.map((product) => (
        <div key={product.id} className="gadture-card">
          <img src={product.image} alt={product.name} className="gadture-image" />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      ))}

      {showCart && (
        <div className="shopping-cart">
          <h2>Your Shopping Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          {/* <p>Total: ₹{calculateTotal().toFixed(2)}</p> */}
          <button onClick={handleCloseCart}>Close Cart</button>
        </div>
      )}

      <button onClick={handleOpenCart} className="open-cart-button">
        Open Cart
      </button>
      <Link to="/addToCart" className="view-cart-link">
        View Cart
      </Link>
    </div>
  );
};

export default HomeAppliance;
