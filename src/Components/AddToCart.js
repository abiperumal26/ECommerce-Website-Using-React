import React, { useState, useEffect } from 'react';
import './AddToCart.css';

const AddToCart = ({ cartItems, onContinueShopping, onSubmitOrder }) => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    paymentMethod: '',
  });
  const [orderNumber, setOrderNumber] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // If cartItems are present, show the form
    if (cartItems.length > 0) {
      setShowThankYou(false);
    }
  }, [cartItems]);

  const generateRandomOrderNumber = () => {
    return Math.floor(Math.random() * 1000000) + 1;
  };

  const submitOrder = () => {
    const randomOrderNumber = generateRandomOrderNumber();
    setOrderNumber(randomOrderNumber);
    setShowThankYou(true);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate name
    if (!userDetails.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(userDetails.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
      isValid = false;
    }

    // Validate address
    if (!userDetails.address.trim()) {
      newErrors.address = 'Address is required';
      isValid = false;
    }

    // Validate payment method
    if (!userDetails.paymentMethod.trim()) {
      newErrors.paymentMethod = 'Payment method is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If validations pass, submit the order
    if (validateForm()) {
      submitOrder();
      onSubmitOrder(userDetails);
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <div className="add-to-cart-container">
      {showThankYou ? (
        <div className="thank-you">
          <h2>Thank you for your order!</h2>
          <p>Your order number is {orderNumber}.</p>
          <p>Your product will be delivered within {Math.floor(Math.random() * 10 + 1)} days.</p>
        </div>
      ) : (
        <div className="cart-details">
          <h2>Your Shopping Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="custom-image-size" />
              <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}

          <form onSubmit={handleSubmit} className="user-details-form">
            <h2>Enter Your Details</h2>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={userDetails.name}
                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="tel"
                value={userDetails.phoneNumber}
                onChange={(e) => setUserDetails({ ...userDetails, phoneNumber: e.target.value })}
                required
              />
              {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                value={userDetails.address}
                onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
                required
              />
              {errors.address && <span className="error">{errors.address}</span>}
            </div>
            <div className="form-group">
              <label>Payment Method:</label>
              <select
                value={userDetails.paymentMethod}
                onChange={(e) => setUserDetails({ ...userDetails, paymentMethod: e.target.value })}
                required
              >
                <option value="">Select Payment Method</option>
                <option value="debitCard">Debit Card</option>
                <option value="creditCard">Credit Card</option>
              </select>
              {errors.paymentMethod && <span className="error">{errors.paymentMethod}</span>}
            </div>

            <button type="submit" className="btn btn-primary">
              Submit Order
            </button>
          </form>

         
        </div>
      )}
    </div>
  );
};

export default AddToCart;
