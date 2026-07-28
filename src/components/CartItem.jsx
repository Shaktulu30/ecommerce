import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div>
      <p>
        {item.nombre} - Cantidad: {item.cantidad} - Subtotal: $
        {item.precio * item.cantidad}
      </p>
      <button onClick={() => removeFromCart(item.id)}>Quitar</button>
    </div>
  );
}

export default CartItem;
