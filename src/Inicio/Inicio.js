import './Inicio.css';
import CV from '../CV-Alejandro.pdf';
import SocialLinks from '../components/SocialLinks';

function Inicio() {
  return (
    <div className="inicio container">
      <div className="inicio__layout">
        <div className="inicio__photo-wrap">
          <div
            className="inicio__photo"
            role="img"
            aria-label="Alejandro Muñiz Berdasco"
          />
        </div>

        <div className="inicio__content">
          <p className="inicio__greeting">Hola, soy</p>
          <h1 className="inicio__name">Alejandro Muñiz Berdasco</h1>
          <p className="inicio__role">Ingeniero Informático · Desarrollador de software</p>
          <p className="inicio__summary">
            Desarrollo aplicaciones con .NET y React. Actualmente en Esnova Software, Gijón.
          </p>

          <div className="inicio__actions">
            <a href={CV} className="btn btn--filled" download="CV-Alejandro.pdf">
              Descargar CV
            </a>
            <a href="#contacto" className="btn">
              Contactar
            </a>
          </div>

          <SocialLinks className="inicio__social" />
        </div>
      </div>
    </div>
  );
}

export default Inicio;
