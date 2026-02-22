import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import ProductoCard from "../ProductoCard";

export default function CatalogoBautizo() {

  const { token } = useContext(AuthContext);

  const [ninas, setNinas] = useState([]);
  const [ninos, setNinos] = useState([]);
  const [likes, setLikes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargar = async () => {

      const resNinas = await fetch(
        "http://localhost:5000/api/productos/categoria/bautizo-niña"
      );
      const dataNinas = await resNinas.json();

      const resNinos = await fetch(
        "http://localhost:5000/api/productos/categoria/bautizo-niño"
      );
      const dataNinos = await resNinos.json();

      setNinas(dataNinas);
      setNinos(dataNinos);
      setLoading(false);
    };

    cargar();
  }, []);

  useEffect(() => {
    if (!token) return;

    fetch("http://localhost:5000/api/usuario/mis-productos", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setLikes(data.likes.map(p => p._id)));

  }, [token]);

  if (loading) return <p>Cargando...</p>;

  return (
    <section>

      <h2 id="bautizo-nina">Bautizo Niña</h2>
      <div className="catalogo-grid">
        {ninas.map(producto => (
          <ProductoCard
            key={producto._id}
            producto={producto}
            likes={likes}
            setLikes={setLikes}
          />
        ))}
      </div>

      <h2 id="bautizo-nino"style={{ marginTop: "50px" }}>Bautizo Niño</h2>
      <div className="catalogo-grid">
        {ninos.map(producto => (
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
