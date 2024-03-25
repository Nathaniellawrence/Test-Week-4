import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserList from './components/UserList';
import PageNotFound from './components/PageNotFound';
import { AuthProvider } from './context/AuthContext';
import Produk from './pages/Produk';
import Keranjang from './pages/Keranjang';
import "./App.css";

const App = () => {
  return (
   
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/keranjang" element={<Keranjang />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
  );
};

export default App;
