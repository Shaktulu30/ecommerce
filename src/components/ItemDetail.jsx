import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

function ItemDetail({ producto }) {
  const { addToCart } = useCart();

  function handleAdd(cantidad) {
    addToCart(producto, cantidad);
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      <p>{producto.categoria}</p>
      <ItemCount stock={producto.stock} onAdd={handleAdd} />
    </div>
  );
}

export default ItemDetail;
