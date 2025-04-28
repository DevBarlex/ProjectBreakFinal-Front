import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, calculateTotal  } = useCart(); 

  if (!cartItems) return <p>Cargando carrito...</p>;

  return (
    <div className="cart-page">
      <h1>Carrito</h1>
      
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img
                  src={item.images}
                  alt={item.title}
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <p>{item.title}</p>
                <p>Precio unitario: {item.price}€</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal: {item.price * item.quantity}€</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar uno</button>
              </li>
            ))}
          </ul>
          <p><strong>Total: {calculateTotal()} €</strong></p>
          <button onClick={clearCart} className="clear-cart-button">
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;



