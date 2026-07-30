import './Curriculum.css';
import SectionHeading from '../components/SectionHeading';

const EDUCATION = [
  {
    title: 'Máster Universitario en Ingeniería Informática',
    period: '2020 – 2022',
    place: 'Universidad de Oviedo, Gijón',
  },
  {
    title: 'Grado en Ingeniería Informática en Tecnologías de la Información',
    period: '2016 – 2020',
    place: 'Universidad de Oviedo, Gijón',
  },
  {
    title: 'Bachiller Científico-Tecnológico',
    period: '2014 – 2016',
    place: 'I.E.S Fernández Vallín, Gijón',
  },
];

const EXPERIENCE = [
  {
    company: 'Esnova Software, Gijón',
    period: 'Septiembre 2022 – Actualidad',
    role: 'Responsable de Proyecto / Ingeniero Software',
    description: 'Desarrollo de aplicaciones en .NET Framework y React',
  },
  {
    company: 'Futuver, Gijón',
    period: 'Octubre 2021 – Junio 2022',
    role: 'Desarrollador de Software / Estudiante en prácticas ',
    description: 'Desarrollo de aplicaciones en .NET Framework y Blazor',
  },
  {
    company: 'Rodicar Hidráulica, Gijón',
    period: 'Febrero 2020 – Julio 2020',
    role: 'Desarrollador de Software / Estudiante en prácticas',
    description: 'Desarrollo aplicaciones en QT Framework y React',
  },
];

function TimelineItem({ title, subtitle, period, description }) {
  return (
    <article className="timeline__item">
      <time className="timeline__date">{period}</time>
      <div className="timeline__body">
        <h4 className="timeline__title">{title}</h4>
        {subtitle && <p className="timeline__subtitle">{subtitle}</p>}
        {description && <p className="timeline__description">{description}</p>}
      </div>
    </article>
  );
}

function Curriculum() {
  return (
    <div className="curriculum container">
      <SectionHeading>Experiencia y formación</SectionHeading>

      <div className="curriculum__columns">
        <div className="curriculum__column curriculum__column--experience">
          <h3 className="curriculum__section-title">Experiencia de trabajo</h3>
          <div className="timeline timeline--primary">
            {EXPERIENCE.map((item) => (
              <TimelineItem
                key={item.company}
                title={item.role}
                subtitle={item.company}
                period={item.period}
                description={item.description}
              />
            ))}
          </div>
        </div>

        <div className="curriculum__column curriculum__column--experience">
          <h3 className="curriculum__section-title">Educación</h3>
          <div className="timeline timeline--secondary">
            {EDUCATION.map((item) => (
              <TimelineItem
                key={item.title}
                title={item.title}
                subtitle={item.place}
                period={item.period}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
