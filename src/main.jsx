import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
