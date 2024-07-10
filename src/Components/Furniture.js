// Furniture.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import './Furniture.css';

const products = [
  { id: 1, name: 'Wooden Wall Shelves', price: '₹1500', image: furni1 },
  { id: 2, name: 'Cupboard', price: '₹5000', image: furni2 },
  { id: 3, name: 'Lukzer Wood Center Table', price: '₹2540', image: furni3 },
  { id: 4, name: 'Curio Centre Round Cotton Home Swing', price: '₹999', image: furni4 },
  { id: 5, name: 'Swing', price: '₹3500', image: furni5 },
  { id: 6, name: 'Hammock Hanging Swing Chair', price: '₹1899', image: furni6 },
  { id: 7, name: 'Laptop Desk', price: '₹2000', image: furni7 },
  { id: 8, name: 'Laptop Desk with additional option', price: '₹2500', image: furni8 },
  { id: 9, name: 'Modern cupboard', price: '₹8000', image: furni9 },
  { id: 10, name: 'Wooden cart', price: '₹11000', image: furni10 },
  { id: 11, name: 'Cupboard', price: '₹5000', image: furni11 },
  { id: 12, name: 'Queen Size Bed', price: '₹18000', image: furni12 },
];

const Furniture = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
  };

  const handleOpenCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleShowItemModal = (item) => {
    setSelectedItem(item);
  };

  const handleCloseItemModal = () => {
    setSelectedItem(null);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₹', '')) * item.quantity, 0).toFixed(2);
  };
  

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 mb-4">
            <div className="card" style={{ borderRadius: '0px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', border: '1px solid white', background: '#F8F9F9 ', padding: '30px' }}>
              <img src={product.image} alt={product.name} className="card-img-top custom-image-size" width="100px" height="300px" />
              <div className="card-body">
                <h3 className="card-title" style={{ fontFamily: 'Times,serif,Times New Roman,philosopher', fontSize: '18px', textAlign: 'center' }}>{product.name}</h3>
                <p className="card-text" style={{ textAlign: 'center' }}>{product.price}</p>
                <div className="d-flex " style={{margin:'0px 45px'}}>
                  <button onClick={() => handleAddToCart(product)} className="btn btn-primary" >
                    Add to Cart
                  </button>
                  <button onClick={() => handleShowItemModal(product)} className="btn btn-success" style={{marginLeft:'10px'}}>
                    View Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="button-row bg-light"  style={{ display:'flex',marginTop: '15px', marginLeft:'1050px',position: 'fixed', top: 0,background:'none' }}>
        <button onClick={handleOpenCart} className="btn btn-primary">
          Open Cart
        </button>
        <Link to="/addToCart" className="btn btn-info ml-2">
          View Cart
        </Link>
      </div>

      <Modal show={showCart} onHide={handleCloseCart} centered>
        <Modal.Header closeButton>
          <Modal.Title>Your Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item d-flex justify-content-between">
              <div>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </div>
              <div>
                <Button onClick={() => removeFromCart(item.id)} variant="danger">
                  Remove
                </Button>
              </div>
            </div>
          ))}

<p>Total: ₹{parseFloat(calculateTotal())}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Close Cart
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={selectedItem !== null} onHide={handleCloseItemModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Selected Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem && (
            <div className="cart-item">
              <img src={selectedItem.image} alt={selectedItem.name} />
              <div>
                <p>{selectedItem.name}</p>
                <p>{selectedItem.price}</p>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Furniture;
