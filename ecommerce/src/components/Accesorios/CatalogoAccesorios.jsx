import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import ProductoCard from "../ProductoCard";

export default function CatalogoAccesorios() {

  const { token } = useContext(AuthContext);

  const [productos, setProductos] = useState([]);
  const [likes, setLikes] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch("http://localhost:5000/api/productos/categoria/accesorio")
      .then(res => res.json())
      .then(data => setProductos(data))
      .finally(() => setLoading(false));
  }, []);

  
  useEffect(() => {
    if (!token) return;

    fetch("http://localhost:5000/api/usuario/mis-productos", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setLikes(data.likes.map(p => p._id)));

  }, [token]);

  if (loading) return <p>Cargando accesorios...</p>;

  return (
    <section className="catalogo-accesorios">

      <h2>Accesorios</h2>

      <div className="catalogo-grid">
        {productos.map(producto => (
          <ProductoCard
            key={producto._id}
            producto={producto}
            likes={likes}
            setLikes={setLikes}
          />
        ))}
      </div>

    </section>
  );
}
