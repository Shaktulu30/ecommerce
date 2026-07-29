import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";

function ItemListContainer() {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProductos() {
      try {
        const productosRef = collection(db, "productos");

        const consulta = categoria
          ? query(productosRef, where("categoria", "==", categoria))
          : productosRef;

        const querySnapshot = await getDocs(consulta);

        const productos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productos);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchProductos();
  }, [categoria]);

  return (
    <div>
      <h1 className="page">Catálogo de productos</h1>
      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && <ItemList productos={productos} />}
    </div>
  );
}

export default ItemListContainer;
