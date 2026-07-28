function ItemDetail ({ producto }) {
    return(
        <div>
            <h2>{producto.nombre}</h2>
            <p>Precio: ${producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <p>{producto.categoria}</p>
        </div>
    );
}

export default ItemDetail