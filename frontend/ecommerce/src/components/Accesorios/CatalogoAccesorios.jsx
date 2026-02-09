import { useState } from "react";
import { NavLink } from "react-router-dom";

// Ejemplo de productos para accesorios
const productosAccesorios = [
  {
    id: "1",
    nombre: "Fular Bautizo",
    imagen: "/images/fularBautizo.jpeg",
    descripcion: "Accesorio delicado que complementa el outfit de bautizo."
  },
  {
    id: "2",
    nombre: "Diadema Floral",
    imagen: "/images/diademaFloral.jpeg",
    descripcion: "Diadema con flores decorativas para ocasiones especiales."
  },
  {
    id: "3",
    nombre: "Zapatos Elegantes",
    imagen: "/images/zapatosElegantes.jpeg",
    descripcion: "Zapatos cómodos y elegantes para ceremonia."
  }
];

export default function CatalogoAccesorios() {
  const [likes, setLikes] = useState({});

  const toggleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="catalogo-accesorios">
      <h2>Catálogo Accesorios</h2>
      <div className="catalogo-accesorios__cards">
        {productosAccesorios.map((producto) => (
          <div key={producto.id} className="catalogo-accesorios__card">
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
            <NavLink to={`/accesorios/${producto.id}`} className="detalle-link">
              Ver más
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
}