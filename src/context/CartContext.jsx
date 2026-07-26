import { createContext, useContext, useState } from 'react';

// 1. Crear el contexto (la caja)
const CartContext = createContext();

// 2. Crear el Provider (quien llena la caja y la ofrece)
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  const value = {
    cart,
    addToCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// 3. Un hook para consumir más fácil
export function useCart() {
  return useContext(CartContext);
}