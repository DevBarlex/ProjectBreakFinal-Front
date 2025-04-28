import React from 'react';
import { useProducts } from '../../context/ProductsContext';
import Producto from '../Producto/Producto'; 
import './CategoryPage.css';

const CategoryPage = ({ categoryName }) => {
    const { filterByCategory } = useProducts();
    const products = filterByCategory(categoryName);

    return (
        <div className="category-page">
            <ul className="products-grid">
                {products.length > 0 ? (
                    products.map((product) => (
                        <li key={product._id} style={{ marginBottom: "1rem" }} className='product-card'>
                            <Producto 
                                id={product._id}
                                title={product.name}
                                price={product.price}
                                images={product.images}
                            />
                        </li>
                    ))
                ) : (
                    <div className="no-products">
                        <p>No hay productos disponibles en {categoryName.toLowerCase()}.</p>
                    </div>                
                )}
            </ul>
        </div>
    );
};

export default CategoryPage;
