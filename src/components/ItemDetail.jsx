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
    <div className="detail-card">
      <img src={producto.imagen} alt={producto.nombre} className="detail-img" />
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      <p>{producto.categoria}</p>
      {producto.stock === 0 ? (
        <div>
          <p>Sin stock</p>
          <Link to="/" className="btn">
            Volver al catálogo
          </Link>
        </div>
      ) : agregado ? (
        <div>
          <Link className="btn" to="/cart">
            Ir al carrito
          </Link>
          <Link to="/" className="btn">
            Seguir comprando
          </Link>
        </div>
      ) : (
        <ItemCount stock={producto.stock} onAdd={handleAdd} />
      )}
    </div>
  );
}

export default ItemDetail;
