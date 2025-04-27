// src/components/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <h1>LUDEN</h1>
        <h2>¡Atrévete a brillar! Bienvenido a nuestro sitio de moda</h2>
        <div className="home-images-container">
          <img
            className="firstimage" 
            src="../../../public/pexels-evoking-ephemerality-222334091-31769230.jpg" 
            alt="Chica"
          />
          <img
            className="firstimage" 
            src="../../../public/pexels-breno-cardoso-149064345-15630925.jpg" 
            alt="Chica"
          />
          <img
            className="firstimage" 
            src="../../../public/pexels-jonathanborba-9406224.jpg" 
            alt="Chica"
          />
          <video
            className="secondimage"
            autoPlay
            muted
            loop
            poster="../../../public/5704950-uhd_4096_2160_24fps.mp4"
          >
            <source src="../../../public/5704950-uhd_4096_2160_24fps.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <img
            className="firstimage" 
            src="../../../public/pexels-samuel-adeleke-2044219506-31798847.jpg" 
            alt="Chica"
          />
          <img
            className="manimage" 
            src="../../../public/pexels-ralph-rabago-3214786.jpg" 
            alt="Chica"
          />
          <img
            className="firstimage" 
            src="../../../public/pexels-magaritta-acheampong-1477993-2849436.jpg" 
            alt="Chica"
          />
        </div>
        <p>Descubre lo mejor en camisetas, pantalones, zapatos y accesorios.</p>
        <Link to="/productos" className="btn-explore">Explorar Productos</Link>
      </div>
    </div>
  );
};

export default Home;
