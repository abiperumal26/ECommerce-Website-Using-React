import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import slip1 from './Images/slipper1.webp';
import slip2 from './Images/slipper5.webp';
import slip3 from './Images/slipper3.webp';
import slip4 from './Images/sandle3.jpg';
import slip5 from './Images/sandle1.jpg';
import slip6 from './Images/sandl2.jpg';
import slip7 from './Images/shoes1.webp';
import slip8 from './Images/shoes4.webp';
import slip9 from './Images/shoes3.webp';
import slip10 from './Images/wear4.webp';
import slip11 from './Images/wear2.webp';
import slip12 from './Images/shoes5.webp';

const products = [
  { id: 1, name: 'Flat Wear', price: '₹500', image: slip1 },
  { id: 2, name: 'BataWomens Alaska Sandal Heels', price: '₹450', image: slip2 },
  { id: 3, name: 'XE LooksBlock heel and Stylish Slippers', price: '₹700', image: slip3 },
  { id: 4, name: 'Heels', price: '₹500', image: slip4 },
  { id: 5, name: 'BataWomen Deva Thong E Heeled Sandal', price: '₹725', image: slip5 },
  { id: 6, name: 'STICYChappal for Women ', price: '₹599', image: slip6 },
  { id: 7, name: 'OFF LIMITS Men Sports Shoes', price: '₹1700', image: slip7 },
  { id: 8, name: 'ASIAN Shoe Casual Sneaker', price: '₹725', image: slip8 },
  { id: 9, name: 'ASIAN Mens Wonder', price: '₹599', image: slip9 },
  { id: 10, name: 'Mens Sports Trekking & Hiking', price: '₹1044', image: slip10 },
  { id: 11, name: ' Skechers', price: '₹1089', image: slip11 },
  { id: 12, name: 'Bersache Lightweight Casual Sneaker', price: '₹1100', image: slip12 },
];

const Foot = () => {
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
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₹', '')) * item.quantity, 0);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 mb-4">
            <div className="card" style={{ borderRadius: '0px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', border: '1px solid white', background: '#E0FCBE', padding: '30px' }}>
              <img src={product.image} alt={product.name} className="card-img-top custom-image-size" width="100px" height="300px" />
              <div className="card-body">
                <h3 className="card-title" style={{ fontFamily: 'Times,serif,Times New Roman,philosopher', fontSize: '18px', textAlign: 'center' }}>{product.name}</h3>
                <p className="card-text" style={{ textAlign: 'center' }}>{product.price}</p>
                <div className="d-flex " style={{margin:'0px 35px'}}>
                  <button onClick={() => handleAddToCart(product)} className="btn btn-primary">
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
          <p>Total: ₹{calculateTotal()}</p>
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

export default Foot;
