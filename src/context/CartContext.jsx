import { createContext, useContext, useState } from "react";

// 1. Crear el contexto (la caja)
const CartContext = createContext();

// 2. Crear el Provider (quien llena la caja y la ofrece)
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product, cantidad) {
    const existe = cart.find((item) => item.id === product.id);

    if (existe) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, cantidad }]);
    }
  }

  function totalItems() {
    return cart.reduce((total, item) => total + item.cantidad, 0);
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function totalPrecio() {
    return cart.reduce((total, item) => total + item.precio * item.cantidad, 0);
  }

  function clearCart() {
    setCart([]);
  }

  const value = {
    cart,
    addToCart,
    totalItems,
    removeFromCart,
    totalPrecio,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// 3. Un hook para consumir más fácil
export function useCart() {
  return useContext(CartContext);
}
