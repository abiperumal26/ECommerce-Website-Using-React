import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
  const [loginFormData, setLoginFormData] = useState({
    username: '',
    password: '',
  });

  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginFormData),
      });

      if (response.ok) {
        console.log('Login successful!');
        setLoginError('');

        onLogin();
        // Navigate to '/products' after successful login
        navigate('/products');
      } else {
        const errorText = await response.text(); // Get the text response
        console.error('Error during login:', errorText);
        setLoginError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError('An unexpected error occurred. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLoginSubmit} autoComplete="off">
        <h2>Login</h2>
        {loginError && <p className="error-message">{loginError}</p>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={loginFormData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginFormData.password}
            onChange={handleChange}
            required
            autoComplete="current-password" 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
