import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import Furniture from './Components/Furniture';
import Gadget from './Components/Gadget';
import HomeAppliance from './Components/HomeAppliance';
import Stationary from './Components/Stationary';
import Cloth from './Components/Cloth';
import Foot from './Components/Foot';
import AddToCart from './Components/AddToCart';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <App>
          <Furniture />
          <Gadget />
          <HomeAppliance />
          <Stationary />
          <Cloth />
          <Foot />
          <AddToCart />
        </App>
      </HashRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
reportWebVitals();
