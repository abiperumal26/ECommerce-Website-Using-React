import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import H1 from './Images/Jubake.webp';
import H2 from './Images/comfyhome.webp';
import H3 from './Images/agara.webp';
import H4 from './Images/act.jpg';
import H5 from './Images/acts.webp';
import H6 from './Images/electric smokeless.webp';
import H7 from './Images/mineral.webp';
import H8 from './Images/Trolley.webp';
import H9 from './Images/portable blender.jpg';
import H10 from './Images/automatic coffee maker.jpg';
import H11 from './Images/prime spin mop.webp';
import H12 from './Images/bullet mixer grinder.jpg';
import './HomeAppli.css';
const products = [
  { id: 1, name: 'COMFYHOME Air Fryer', price: '₹5,999', image: H1 },
  { id: 2, name: 'Air Fryer For Home', price: '₹4,999', image: H2 },
  { id: 3, name: 'Acaro Oven', price: '₹1,699', image: H3 },
  { id: 4, name: 'Activa Blender', price: '₹3,000', image: H4 },
  { id: 5, name: 'ACTIVA Pluto Combo', price: '₹1,599', image: H5 },
  { id: 6, name: 'Electric Stove', price: '₹4,000', image: H6 },
  { id: 7, name: 'Water Purifier', price: '₹5,999', image: H7 },
  { id: 8, name: 'Kitchen Trolley with wheels', price: '₹2,299', image: H8 },
  { id: 9, name: 'Protable Blender ', price: '₹1,800', image: H9 },
  { id: 10, name: 'Instant Coffee Maker', price: '₹10,000', image: H10 },
  { id: 11, name: 'Mob', price: '₹800', image: H11 },
  { id: 12, name: 'Cook Well Bullet Mixer Grinder', price: '₹2,477', image: H12 },

];

const HomeAppliance = () => {
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

export default HomeAppliance;
