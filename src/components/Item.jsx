import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Item ({ producto }) {
    const { addToCart } = useCart();

    return (
        <li>
            <Link to={`/product/${producto.id}`}>{producto.nombre}</Link> - ${producto.precio}
            <button onClick={() => addToCart(producto)}>Agregar</button>
        </li>
    );
}

export default Item;