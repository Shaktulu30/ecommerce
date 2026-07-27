import Item from "./Item";

function ItemList({ productos }) {
  return (
    <ul>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </ul>
  );
}

export default ItemList;