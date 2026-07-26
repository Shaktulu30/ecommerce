import { useCart } from "../context/CartContext"

function Home () {
    const { addToCart } = useCart();

    return (
    <div>
        <h1>Catalogo de Productos</h1>
        <button onClick={() => addToCart({ id: 1, name: 'Producto de Prueba'})}>
            Agregar al Carrito
        </button>
    </div>
)}

export default Home