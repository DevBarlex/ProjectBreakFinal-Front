import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // ✅ Cargar carrito guardado al iniciar
    useEffect(() => {
        const storedCart = localStorage.getItem('cartItems');  // Usar la misma clave aquí
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    // ✅ Guardar carrito cada vez que cambie
    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));  // La misma clave que al cargar
        }
    }, [cartItems]);

    // ✅ Agregar producto
    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // ✅ Quitar producto
    const removeFromCart = (productId) => {
        setCartItems(prevItems =>
            prevItems
                .map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0) // Eliminamos si cantidad llega a 0
        );
    };

    // ✅ Vaciar carrito
    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');  // Asegúrate de eliminarlo correctamente
    };

    // ✅ Calcular el total
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart, clearCart, calculateTotal }}>
            {children}
        </CartContext.Provider>
    );
};
