import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function ItemDetail({ producto }) {
  const { addToCart } = useCart();

  const [agregado, setAgregado] = useState(false);

  function handleAdd(cantidad) {
    addToCart(producto, cantidad);
    setAgregado(true);
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      <p>{producto.categoria}</p>
      {agregado ? (
        <Link to="/cart">Ir al carrito</Link>
      ) : (
        <ItemCount stock={producto.stock} onAdd={handleAdd} />
      )}
    </div>
  );
}

export default ItemDetail;
