import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  async function fetchProducto() {
    try {
      const docRef = doc(db, "productos", id);
      const docSnap = await getDoc(docRef);
      setProducto({ id: docSnap.id, ...docSnap.data() });
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  fetchProducto();
}, [id]);

  return (
    <div>
      {loading ? <p>Cargando...</p> : <ItemDetail producto={producto} />}
    </div>
  );
}

export default ItemDetailContainer;