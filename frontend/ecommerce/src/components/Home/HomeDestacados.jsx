import BautizoNino from "../../images/BautizoNinoDestacado.jpeg"

export default function HomeDestacados() {
  return (
    <section className="home-destacados">
      <div className="home-destacados__header">
        <p>Destacados</p>
        <h4>Productos Favoritos</h4>
        <button className="home-destacados__button">Ver Todo el catálogo</button>
      </div>

      <div className="home-destacados__content">
        <div className="home-destacados__card">
          <p>Bautizo</p>
          <img src={BautizoNino} alt="Vestido Bautizo" />
          <h5>Traje Angelical</h5>
        </div>
        <div className="home-destacados__card">
          <p>Niñas</p>
          <img src="" alt="" />
          <h5>Conjunto Invierno</h5>
        </div>
        <div className="home-destacados__card">
          <p>Accesorios</p>
          <img src="" alt="" />
          <h5>Fular</h5>
        </div>
        <div className="home-destacados__card">
          <p>Bautizo</p>
          <img src="" alt="" />
          <h5>Vestido Celestial</h5>
        </div>
      </div>
    </section>
  );
}