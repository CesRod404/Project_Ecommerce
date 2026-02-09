import { useParams } from "react-router-dom";

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

export default function DetalleNinos() {
  const { id } = useParams();
  const producto = productosNinos.find((p) => p.id === id);

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="detalle-ninos">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>{producto.descripcion}</p>
    </div>
  );
}