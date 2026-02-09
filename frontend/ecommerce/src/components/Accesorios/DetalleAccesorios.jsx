import { useParams } from "react-router-dom";

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

export default function DetalleAccesorios() {
  const { id } = useParams();
  const producto = productosAccesorios.find((p) => p.id === id);

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="detalle-accesorios">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>{producto.descripcion}</p>
    </div>
  );
}