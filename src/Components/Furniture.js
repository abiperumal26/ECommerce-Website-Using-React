
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import furni1 from './Images/Furni1.webp';
import furni2 from './Images/Nazar Art Furni2.webp';
import furni3 from './Images/Sofa.webp';
import furni4 from './Images/swing2.webp';
import furni5 from './Images/swing3.webp';
import furni6 from './Images/swing4.webp';
import furni7 from './Images/furni7.webp';
import furni8 from './Images/furni8.webp';
import furni9 from './Images/furni9.webp';
import furni10 from './Images/furni10.webp';
import furni11 from './Images/furni11.webp';
import furni12 from './Images/furni12.webp';
import './Gadget.css';
const products = [
  { id: 1, name: 'Wooden Wall Shelves', price: '1,500', image: furni1 },
  { id: 2, name: 'Cupboard', price: '₹5,000', image: furni2 },
  { id: 3, name: 'Lukzer Wood Center Table', price: '₹2,540', image: furni3 },
  { id: 4, name: 'Curio Centre Round Cotton Home Swing', price: '₹999', image: furni4 },
  { id: 5, name: 'Swing', price: '₹3,500', image: furni5 },
  { id: 6, name: ' Hammock Hanging Swing Chair', price: '₹1,899', image: furni6 },
  { id: 7, name: 'Laptop Desk', price: '₹2,000', image: furni7 },
  { id: 8, name: 'Laptop Desk with additonal option', price: '₹2500', image: furni8 },
  { id: 9, name: 'Modern cupboard', price: '₹8.000', image: furni9 },
  { id: 10, name: 'Wooden cart', price: '₹11,000', image: furni10 },
  { id: 11, name: 'Cupboard', price: '₹5,000', image: furni11 },
  { id: 12, name: 'Queen Size Bed', price: '₹18,000', image: furni12 },
];

const Furniture = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

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
    <div className="gadture-container" style={{
      marginTop:'80px'
    }}>
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
 

  <div className='button-row' style={{
  marginTop:'25px',
  position:'fixed',
  top:0
}}>
      <button onClick={handleOpenCart} className="open-cart-button">
        Open Cart
      </button>
    
      
      
      <Link to="/addToCart" className='view' >
        View Cart
      </Link>
      </div>
    </div>
  
    );
  };
 

export default Furniture;
