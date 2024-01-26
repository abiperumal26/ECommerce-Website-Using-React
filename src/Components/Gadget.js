import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gad1 from './Images/samsung galaxy.webp';
import gad2 from './Images/motorola.jpg';
import gad3 from './Images/realme.webp';
import gad4 from './Images/red.webp';
import gad5 from './Images/Appl.jpg';
import gad6 from './Images/lenovo.webp';
import gad7 from './Images/dell.jpg';
import gad8 from './Images/samiii.jpg';
import gad9 from './Images/poco.jpg';
import gad10 from './Images/gad10.webp';
import gad11 from './Images/gad11.webp';
import gad12 from './Images/gad12.webp';
import './Gadget.css';
const products = [
  { id: 1, name: 'Galaxy Ultra', price: '₹55,000', image: gad1 },
  { id: 9, name: 'PCOCO C51', price: '₹22,000', image: gad9 },
  { id: 2, name: 'Mototola', price: '₹65,000', image: gad2 },
  { id: 3, name: 'Realme Narzo', price: '₹23,000', image: gad3 },
  { id: 4, name: 'Redmi 13C', price: '₹25,000', image: gad4 },
 
  { id: 5, name: 'Iphone', price: '₹75,000', image: gad5 },
  { id: 6, name: 'Lenovo Ideapad', price: '₹40,000', image: gad6 },
  { id: 7, name: 'HP Folding', price: '₹58,000', image: gad7 },
 
  { id: 8, name: 'SAMSUNG', price: '₹87,000', image: gad8 },
  { id: 10, name: 'Smart watch with ash', price: '₹7,000', image: gad10 },
  { id: 11, name: 'Smart watch with black', price: '₹5,000', image: gad11 },
  { id: 12, name: 'Smart Watch with black', price: '₹10,00', image: gad12 },

];

const Gadget = () => {
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
          {/* <p>Total: ₹{calculateTotal()}</p> */}
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

export default Gadget;
