import { useCart } from "../context/CartContext";

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <span className="cart-widget">
      🛒 {totalItems()}
    </span>
  );
}

export default CartWidget;