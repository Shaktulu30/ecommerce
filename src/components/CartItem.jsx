import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <p>
        {item.nombre} - Cantidad: {item.cantidad} - Subtotal: $
        {item.precio * item.cantidad}
      </p>
      <button className="btn" onClick={() => removeFromCart(item.id)}>Quitar</button>
    </div>
  );
}

export default CartItem;
