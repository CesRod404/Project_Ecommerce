import { useParams } from "react-router-dom";

// Simulación de productos (puedes moverlo a un JSON o API)
const productosBautizo = [
  {
    id: "1",
    nombre: "Vestido Celestial",
    imagen: "/images/vestidoCelestial.jpeg",
    descripcion: "Vestido elegante con detalles bordados para bautizo."
  },
  {
    id: "2",
    nombre: "Traje Angelical",
    imagen: "/images/trajeAngelical.jpeg",
    descripcion: "Traje clásico para niño con accesorios incluidos."
  },
  {
    id: "3",
    nombre: "Fular Bautizo",
    imagen: "/images/fularBautizo.jpeg",
    descripcion: "Accesorio delicado que complementa el outfit."
  }
];

export default function DetalleBautizo() {
  const { id } = useParams();
  const producto = productosBautizo.find((p) => p.id === id);

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="detalle-bautizo">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>{producto.descripcion}</p>
    </div>
  );
}