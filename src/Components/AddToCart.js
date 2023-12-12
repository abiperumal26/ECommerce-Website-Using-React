import React, { useState } from 'react';
import './AddToCart.css';

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showThankYou, setShowThankYou] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [days, setDays] = useState(1);

  const UserDetailsForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [alternatePhoneNumber, setAlternatePhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber, alternatePhoneNumber, address });
    };

    return (
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="alternatePhoneNumber">Alternate Phone Number:</label>
          <input type="tel" id="alternatePhoneNumber" value={alternatePhoneNumber} onChange={(e) => setAlternatePhoneNumber(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Make Payment</label>
          <input type="radio" name="paymentMethod" value="cash" />
          <span>Cash on Delivery</span>
          <input type="radio" name="paymentMethod" value="debitCard" />
          <span>Debit Card</span>
        </div>
        <button type="submit">Submit Order</button>
      </form>
    );
  };

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
  };

  const submitOrder = (userDetails) => {
    setUserDetails(userDetails);
    const randomOrderNumber = Math.floor(Math.random() * 1000000) + 1;
    setOrderNumber(randomOrderNumber);
    order(); // Call the order function to set random delivery days
    setShowThankYou(true);
  };

  let order = () => {
    let day = Math.floor(Math.random() * 10 + 1);
    setDays(day);
  };

  return (
    <div className="app">
      {showThankYou ? (
        <div className="thank-you">
          <p>Thank you for your order! Your order number is {orderNumber}.</p>
          <p>Your product will be delivered within {days} days.</p>
        </div>
      ) : (
        <div className="app-content">
          <UserDetailsForm onSubmit={submitOrder} />
        </div>
      )}
    </div>
  );
};

export default AddToCart;
