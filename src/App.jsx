import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './src/Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './src/Pages/ProductPage/ProductPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<ProductPage />} />
      </Routes>
    </Router>
  )
}
