import { useCart } from "../context/CartContext";

function CartWidget() {
    const { cart } = useCart();

    return <span>{cart.length}</span>;
}

export default CartWidget;