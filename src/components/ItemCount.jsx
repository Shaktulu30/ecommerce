import { useState } from "react";

function ItemCount({ stock, onAdd }) {
  const [cantidad, setCantidad] = useState(1);

  function restar() {
    if (cantidad > 1) {
        setCantidad(cantidad - 1);
    }
  }

  function sumar() {
    if (cantidad < stock) {
        setCantidad(cantidad + 1);
    }
  }

  return (
    <div>
      <p>Cantidad: {cantidad}</p>
      <button className="btn" onClick={restar}>-</button>
      <button className="btn" onClick={sumar}>+</button>
      <button className="btn" onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;