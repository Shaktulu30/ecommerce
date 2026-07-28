import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, totalPrecio } = useCart();

  return (
    <div>
      <h1>Tu carrito</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <p>
                {item.nombre} - Cantidad: {item.cantidad} - Subtotal: $
                {item.precio * item.cantidad}
              </p>
              <button onClick={() => removeFromCart(item.id)}>Quitar</button>
              <Link to="/checkout">Finalizar compra</Link>
            </div>
          ))}
          <h3>Total: ${totalPrecio()}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
