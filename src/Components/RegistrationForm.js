import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = ({ onRegistration }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: '',
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    // Validation for each field
    Object.keys(formData).forEach((fieldName) => {
      if (!formData[fieldName].trim()) {
        newErrors[fieldName] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
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
            phoneNumber: '',
          });
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            console.error('Failed to register user:', errorData.message);
          } else {
            console.error('Failed to register user. Unexpected response from the server.');
          }
        }
      } catch (error) {
        console.error('Error during registration:', error.message);
      }
    } else {
      console.log('Registration failed. Please check the form for errors.');
    }
  };

  return (
    <div className="registration-container mt-5 p-4" style={{ margin: 'auto', maxWidth: '400px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <form onSubmit={handleSubmit} autoComplete="off">
        {registrationSuccess && (
          <div className="alert alert-success" role="alert">
            Registration Successful! Data submitted to the server.
          </div>
        )}

        {Object.keys(formData).map((fieldName) => (
          <div key={fieldName} className="row mb-3">
            <label htmlFor={fieldName} className="col-sm-4 col-form-label">
              {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}:
            </label>
            <div className="col-sm-8">
              {fieldName === 'password' || fieldName === 'confirmPassword' ? (
                <input
                  type="password"
                  className="form-control"
                  id={fieldName}
                  name={fieldName}
                  value={formData[fieldName]}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                />
              ) : fieldName === 'address' ? (
                <textarea
                  className="form-control"
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
                  className="form-control"
                  id={fieldName}
                  name={fieldName}
                  value={formData[fieldName]}
                  onChange={handleChange}
                  required
                />
              )}
              <small className="form-text text-danger">{formErrors[fieldName]}</small>
            </div>
          </div>
        ))}

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>

      {registrationSuccess && navigate('/login')}
    </div>
  );
};

export default RegistrationForm;
