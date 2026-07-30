import './Proyectos.css';
import SectionHeading from '../components/SectionHeading';

const PROJECTS = [
  {
    id: 'fluidos',
    title: 'Sistema de gestión de fluidos',
    description:
      'Aplicación integrada en pistolas dispensadoras de fluidos que permite controlar y registrar la cantidad suministrada, facilitando posteriormente la consulta y visualización de los datos a través de una plataforma web.',
  },
  {
    id: 'pago',
    title: 'Aplicación de pago por uso',
    description:
      'Sistema de despliegue y gestión de aplicaciones en la nube que integra una pasarela de pago para gestionar suscripciones y controlar el acceso y la disponibilidad de las aplicaciones contratadas.',
  },
  {
    id: 'alexa',
    title: 'Fomento de actividad física',
    description:
      'Aplicación para dispositivos inteligentes orientada al seguimiento de la actividad física del usuario. Los datos recopilados son analizados mediante una skill de Alexa, que genera recomendaciones y propone rutinas personalizadas para fomentar un estilo de vida más activo y reducir el sedentarismo.',
  },
];

function Proyectos() {
  return (
    <div className="proyectos container">
      <SectionHeading>Proyectos personales</SectionHeading>

      <div className="proyectos__list">
        {PROJECTS.map((project) => (
          <article key={project.id} className="proyectos__item">
            <div
              className={`proyectos__image proyectos__image--${project.id}`}
              role="img"
              aria-label={project.title}
            />
            <div className="proyectos__content">
              <h3 className="proyectos__title">{project.title}</h3>
              <p className="proyectos__description">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;
