import { useParams } from "react-router-dom";

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

export default function DetalleNinas() {
  const { id } = useParams();
  const producto = productosNinas.find((p) => p.id === id);

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="detalle-ninas">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>{producto.descripcion}</p>
    </div>
  );
}