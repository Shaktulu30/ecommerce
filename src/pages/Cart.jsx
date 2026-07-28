import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, totalPrecio } = useCart();

  return (
    <div>
      <h1>Tu carrito</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <h3>Total: ${totalPrecio()}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
