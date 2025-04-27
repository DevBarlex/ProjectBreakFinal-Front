import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const urlApi = 'http://localhost:3000/api/products';

    const fetchProducts = async () => {
        try {
            const response = await fetch(urlApi);
            const productsData = await response.json();
            setProducts(productsData);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const filterByCategory = (category) => {
        return products.filter(product => product.category === category);
    };

    return (
        <ProductsContext.Provider value={{ products, filterByCategory }}>
            {children}
        </ProductsContext.Provider>
    );
};
