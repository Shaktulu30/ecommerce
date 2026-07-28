import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <Link to={`/product/${producto.id}`} className="item-card">
      <img src={producto.imagen} alt={producto.nombre} className="item-img" />
      <span className="item-nombre">{producto.nombre}</span>
      <p className="item-precio">${producto.precio}</p>
    </Link>
  );
}

export default Item;
