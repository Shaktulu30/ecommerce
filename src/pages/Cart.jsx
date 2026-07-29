import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, totalPrecio } = useCart();

  return (
    <div className="page">
      <h1>Tu carrito</h1>
      {cart.length === 0 ? (
        <p className="cart-empty">Tu carrito está vacío 🛒</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <h3 className="total">Total: ${totalPrecio()}</h3>
          <Link to="/checkout" className="btn">
            Finalizar compra
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
