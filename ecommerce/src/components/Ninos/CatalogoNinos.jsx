import { useState } from "react";
import { NavLink } from "react-router-dom";

// Ejemplo de productos para niños
const productosNinos = [
  {
    id: "1",
    nombre: "Conjunto Deportivo",
    imagen: "/images/conjuntoDeportivo.jpeg",
    descripcion: "Conjunto cómodo y moderno para actividades diarias."
  },
  {
    id: "2",
    nombre: "Camisa Elegante",
    imagen: "/images/camisaElegante.jpeg",
    descripcion: "Camisa formal para eventos especiales."
  },
  {
    id: "3",
    nombre: "Sudadera Azul",
    imagen: "/images/sudaderaAzul.jpeg",
    descripcion: "Sudadera cálida y casual para temporada de frío."
  }
];

export default function CatalogoNinos() {
  const [likes, setLikes] = useState({});

  const toggleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="catalogo-ninos">
      <h2>Catálogo Niños</h2>
      <div className="catalogo-ninos__cards">
        {productosNinos.map((producto) => (
          <div key={producto.id} className="catalogo-ninos__card">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>

            {/* Botón de Like */}
            <button
              className={`like-button ${likes[producto.id] ? "liked" : ""}`}
              onClick={() => toggleLike(producto.id)}
            >
              {likes[producto.id] ? "❤️" : "🤍"}
            </button>

            {/* Link a la página de detalle */}
            <NavLink to={`/ninos/${producto.id}`} className="detalle-link">
              Ver más
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
}