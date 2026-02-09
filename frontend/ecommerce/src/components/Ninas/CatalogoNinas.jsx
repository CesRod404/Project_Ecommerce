import { useState } from "react";
import { NavLink } from "react-router-dom";

// Ejemplo de productos para niñas
const productosNinas = [
  {
    id: "1",
    nombre: "Conjunto Invierno",
    imagen: "/images/conjuntoInvierno.jpeg",
    descripcion: "Conjunto cálido y elegante para temporada de invierno."
  },
  {
    id: "2",
    nombre: "Vestido Floral",
    imagen: "/images/vestidoFloral.jpeg",
    descripcion: "Vestido ligero con estampado floral para ocasiones especiales."
  },
  {
    id: "3",
    nombre: "Abrigo Rosa",
    imagen: "/images/abrigoRosa.jpeg",
    descripcion: "Abrigo acolchado en tono rosa pastel, ideal para días fríos."
  }
];

export default function CatalogoNinas() {
  const [likes, setLikes] = useState({});

  const toggleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="catalogo-ninas">
      <h2>Catálogo Niñas</h2>
      <div className="catalogo-ninas__cards">
        {productosNinas.map((producto) => (
          <div key={producto.id} className="catalogo-ninas__card">
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
            <NavLink to={`/ninas/${producto.id}`} className="detalle-link">
              Ver más
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
}