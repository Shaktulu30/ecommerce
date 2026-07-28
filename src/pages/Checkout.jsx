import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, totalPrecio, clearCart } = useCart();

  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const [ordenId, setOrdenId] = useState(null);

  function handleChange(e) {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const orden = {
      comprador: datos,
      items: cart,
      total: totalPrecio(),
      fecha: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "ordenes"), orden);
      setOrdenId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  }

  return (
    <div>
      {ordenId ? (
        <div className="page">
          <h1>¡Compra realizada con éxito!</h1>
          <p>El ID de tu orden es: {ordenId}</p>
        </div>
      ) : (
        <div>
          <h1>Checkout</h1>
          <form onSubmit={handleSubmit}>
            <input
              name="nombre"
              placeholder="Nombre"
              value={datos.nombre}
              onChange={handleChange}
              className="form-input"
            />
            <input
              name="email"
              placeholder="Email"
              value={datos.email}
              onChange={handleChange}
              className="form-input"
            />
            <input
              name="telefono"
              placeholder="Teléfono"
              value={datos.telefono}
              onChange={handleChange}
              className="form-input"
            />
            <button className="btn" type="submit">Confirmar compra</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Checkout;
