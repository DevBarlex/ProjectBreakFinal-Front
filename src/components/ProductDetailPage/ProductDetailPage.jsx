// src/components/ProductDetailPage/ProductDetailPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductsContext';
import { useCart } from '../../context/CartContext';
import './ProductDetailPage.css';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


const ProductDetailPage = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();

  const product = products.find(p => p._id === id);

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      title: product.name,
      description: product.description,
      price: product.price,
      size: product.size,
      images: product.images
    });
  };

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product-carousel">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
          >
          {product.images.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img src={imageUrl} alt={`Imagen ${index + 1}`} />
            </SwiperSlide>
          ))}
          </Swiper>
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="description">{product.description}</p>
          <p className="price">{product.price} €</p>
          <button onClick={handleAddToCart}>Añadir al carrito</button>
        </div>
      </div>
    </div>
  );  
};

export default ProductDetailPage;
