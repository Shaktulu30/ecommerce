import { useCart } from "../context/CartContext";

function Item ({ producto }) {
    const { addToCart } = useCart();

    return (
        <li>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => addToCart(producto)}>Agregar</button>
        </li>
    );
}

export default Item;