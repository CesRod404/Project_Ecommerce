import { useEffect, useState } from "react";
import { getProducts } from "../utils/FakeStoreApi";

export default function CatalogoApi() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cached = localStorage.getItem("apiData");
    if (cached) {
      setItems(JSON.parse(cached));
      setLoading(false);
    } else {
      getProducts()
        .then((data) => {
          setItems(data);
          localStorage.setItem("apiData", JSON.stringify(data));
        })
        .catch(() =>
          setError(
            "Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde."
          )
        )
        .finally(() => setLoading(false));
    }
  }, []);

  if (loading) return <p>⏳ Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (items.length === 0) return <p>No se ha encontrado nada</p>;

  return (
    <section className="catalogo-api">
      <h2>Catálogo desde Fake Store API</h2>
      <div className="catalogo-api__grid">
        {items.slice(0, visible).map((item) => (
          <div key={item.id} className="catalogo-api__card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price} USD</p>
          </div>
        ))}
      </div>
      {visible < items.length && (
        <button onClick={() => setVisible(visible + 3)}>Mostrar más</button>
      )}
    </section>
  );
}