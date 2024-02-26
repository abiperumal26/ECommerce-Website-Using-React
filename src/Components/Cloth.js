import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dress1 from './Images/clooo3.webp';
import dress2 from './Images/clooo2.webp';
import dress3 from './Images/clooo4.webp';
import dress4 from './Images/meen5.webp';
import dress5 from './Images/meen6.webp';
import dress6 from './Images/meen8.webp';
import dress7 from './Images/meesho3.webp';
import dress8 from './Images/meesho2.webp';
import dress9 from './Images/meesho5.webp';
import dress10 from './Images/meen10.webp';
import dress11 from './Images/meen8.webp';
import dress12 from './Images/meen12.jpg';
import './Cloth.css';

const products = [
  { id: 1, name: 'Frock', price: '₹500', image: dress1 },
  { id: 2, name: 'Kurti', price: '₹800', image: dress2 },
  { id: 3, name: 'cotton Frock', price: '₹500', image: dress3 },
  { id: 4, name: 'cashual shirt', price: '₹400', image: dress4 },
  { id: 5, name: 'stylish shirt ', price: '₹600', image: dress5 },
  { id: 6, name: 'Formal shirt', price: '₹400', image: dress6 },
  { id: 7, name: 'Full Frock', price: '₹600', image: dress7 },
  { id: 8, name: 'Modern Tops', price: '₹500', image: dress8 },
  { id: 9, name: 'Modern Kurti', price: '₹800', image: dress9 },
  { id: 10, name: 'Blue shirt', price: '₹400', image: dress10 },
  { id: 11, name: 'Double Side ', price: '₹1000', image: dress11 },
  { id: 12, name: 'stylish shirt', price: '₹800', image: dress12 },
];

const Cloth = () => {
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
            <div className="card" style={{ borderRadius: '0px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', border: '1px solid white', background: '#F6F1F4', padding: '30px' }}>
              <img src={product.image} alt={product.name} className="card-img-top custom-image-size" width="100px" height="400px" />
              <div className="card-body">
                <h3 className="card-title" style={{ fontFamily: 'Times,serif,Times New Roman,philosopher', fontSize: '18px', textAlign: 'center' }}>{product.name}</h3>
                <p className="card-text" style={{ textAlign: 'center' }}>{product.price}</p>
                <div className="d-flex justify-content-between">
                  <button onClick={() => handleAddToCart(product)} className="btn btn-primary">
                    Add to Cart
                  </button>
                  <button onClick={() => handleShowItemModal(product)} className="btn btn-success">
                    View Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="button-row bg-light" style={{ display: 'flex', marginTop: '15px', marginLeft: '1050px', position: 'fixed', top: 0, background: 'none' }}>
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

export default Cloth;
