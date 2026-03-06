import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { CartProvider } from './contexts/cartContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <CartProvider>
      <App />
     </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
