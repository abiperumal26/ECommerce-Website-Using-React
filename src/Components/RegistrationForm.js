import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = ({ onRegistration }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    address: '',
    phoneNumber: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    address: '',
    phoneNumber: '',
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    // Validation for each field
    Object.keys(formData).forEach((fieldName) => {
      if (!formData[fieldName].trim()) {
        newErrors[fieldName] = `${fieldName} is required`;
        valid = false;
      }
    });

    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    if (
      formData.password.trim() &&
      (formData.password.trim().length < 6 || formData.password !== formData.confirmPassword)
    ) {
      newErrors.password = 'Password must be at least 6 characters and match Confirm Password';
      valid = false;
    }

    if (formData.phoneNumber.trim() && !/^\d{10}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Invalid phone number format';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Registration successful!');
          setRegistrationSuccess(true);
          onRegistration(formData.username);
          setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            fullName: '',
            address: '',
            phoneNumber: '',
          });
        } else {
          const errorData = await response.json();
          console.error('Failed to register user:', errorData.message);
        }
      } catch (error) {
        console.error('Error during registration:', error.message);
      }
    } else {
      console.log('Registration failed. Please check the form for errors.');
    }
  };

  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit} autoComplete="off">
        {registrationSuccess && (
          <div className="success-message">
            Registration Successful! Data submitted to the server.
          </div>
        )}

        {Object.keys(formData).map((fieldName) => (
          <div key={fieldName} className="form-group">
            <label htmlFor={fieldName}>{fieldName}:</label>
            {fieldName === 'password' || fieldName === 'confirmPassword' ? (
              <input
                type="password"
                id={fieldName}
                name={fieldName}
                value={formData[fieldName]}
                onChange={handleChange}
                required
                autoComplete="new-password"
              />
            ) : fieldName === 'address' ? (
              <textarea
                id={fieldName}
                name={fieldName}
                value={formData[fieldName]}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            ) : (
              <input
                type="text"
                id={fieldName}
                name={fieldName}
                value={formData[fieldName]}
                onChange={handleChange}
                required
              />
            )}
            <p className="error-message">{formErrors[fieldName]}</p>
          </div>
        ))}

        <button type="submit">Register</button>
      </form>

      {registrationSuccess && navigate('/login')}
    </div>
  );
};

export default RegistrationForm;
