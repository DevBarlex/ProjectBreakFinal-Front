import React from 'react';
import { useProducts } from '../../context/ProductsContext';
import Producto from '../Producto/Producto'; 
import './ProductsPage.css';

const ProductsPage = () => {
    const { products } = useProducts();

    return (
        <div className="products-page">
            <div className="products-grid">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className="product-card">
                            <Producto 
                                id={product._id}
                                title={product.name}
                                images={product.images}
                            />
                        </div>
                    ))
                ) : (
                    <p>Cargando productos...</p>
                )}
            </div>
        </div>
    );
};

export default ProductsPage;


