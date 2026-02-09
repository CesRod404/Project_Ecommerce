import { useState } from "react";
import { NavLink } from "react-router-dom";

// Ejemplo de productos (puedes traerlos de un JSON o API)
const productosBautizo = [
  {
    id: 1,
    nombre: "Vestido Celestial",
    imagen: "/images/vestidoCelestial.jpeg",
    descripcion: "Vestido elegante con detalles bordados para bautizo."
  },
  {
    id: 2,
    nombre: "Traje Angelical",
    imagen: "/images/trajeAngelical.jpeg",
    descripcion: "Traje clásico para niño con accesorios incluidos."
  },
  {
    id: 3,
    nombre: "Fular Bautizo",
    imagen: "/images/fularBautizo.jpeg",
    descripcion: "Accesorio delicado que complementa el outfit."
  }
];

export default function CatalogoBautizo() {
  const [likes, setLikes] = useState({});

  const toggleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="catalogo-bautizo">
      <h2>Catálogo Bautizo</h2>
      <div className="catalogo-bautizo__cards">
        {productosBautizo.map((producto) => (
          <div key={producto.id} className="catalogo-bautizo__card">
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
            <NavLink to={`/bautizo/${producto.id}`} className="detalle-link">
              Ver más
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
}