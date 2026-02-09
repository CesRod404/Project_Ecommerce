import Card from "../Card/Card"

import vestidoBautizo from "../../images/vestidoBautizo.jpeg"
import trajeBautizo from "../../images/trajeBautizo.jpeg"
import fular from "../../images/fular.jpeg"

export default function HomePrincipal() {
  return (
    <section className="home-principal">
      <div className="home-principal__header">
        <p>Nuestras categorías</p>
        <h2>Encuentra lo Perfecto</h2>
        <p>
          Explora nuestra selección cuidadosamente seleccionada de ropa y accesorios
          para los más pequeños
        </p>
      </div>

      <div className="home-principal__cards">
        <Card
          title="Vestidos de Bautizo"
          description="Elegancia y tradición para el día más especial"
          category="bautizo"
          image={vestidoBautizo}
        />
        <Card
          title="Trajes de Bautizo para Niños"
          description="Confort y estilo para los pequeños"
          category="bautizo"
          image={trajeBautizo}
        />
        <Card
          title="Accesorios"
          description="Detalles que completan cada outfit perfecto"
          category="accesorios"
          image={fular}
        />

      </div>
    </section>
  );
}