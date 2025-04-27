import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import CartPage from './components/CartPage/CartPage';
import ProductDetailPage from './components/ProductDetailPage/ProductDetailPage';
import Buscar from './components/Buscar/Buscar'; // o la ruta donde guardes tu componente



import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';

import './App.css';

const App = () => {
  return (
    <CartProvider> {/* Mover CartProvider aquí */}
      <ProductsProvider> {/* Dejar ProductsProvider dentro */}
        <div className="app-container" id="root">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/productos" element={<ProductsPage />} />
            <Route path="/camisetas" element={<CategoryPage categoryName="Camisetas" />} />
            <Route path="/vestidos" element={<CategoryPage categoryName="Vestidos" />} />
            <Route path="/pantalones" element={<CategoryPage categoryName="Pantalones" />} />
            <Route path="/zapatos" element={<CategoryPage categoryName="Zapatos" />} />
            <Route path="/accesorios" element={<CategoryPage categoryName="Accesorios" />} />
            <Route path="/cart" element={<CartPage />} /> 
            <Route path="/producto/:id" element={<ProductDetailPage />} />
            <Route path="/buscar" element={<Buscar />} />
          </Routes>
          <Footer />
        </div>
      </ProductsProvider>
    </CartProvider>
  );
};

export default App;

