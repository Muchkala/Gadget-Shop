import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProductPage from './Pages/ProductPage/ProductPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  )
}
