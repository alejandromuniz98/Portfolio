import './SobreMi.css';
import SectionHeading from '../components/SectionHeading';

const PERSONAL_DATA = [
  { label: 'Email', value: 'alejandromb98@gmail.com', href: 'mailto:alejandromb98@gmail.com' },
  {
    label: 'Web',
    value: 'alejandromuniz98.github.io/Portfolio/',
    href: 'https://alejandromuniz98.github.io/Portfolio/',
  },
  { label: 'Lugar de residencia', value: 'Gijón, Asturias' },
];

const INTERESTS = [
  { id: 'juegos', label: 'Juegos' },
  { id: 'musica', label: 'Música' },
  { id: 'viajar', label: 'Viajar' },
  { id: 'deporte', label: 'Deporte' },
  { id: 'naturaleza', label: 'Naturaleza' },
  { id: 'fotografia', label: 'Fotografía' },
];

function SobreMi() {
  return (
    <div className="sobre-mi container">
      <SectionHeading>Sobre mí</SectionHeading>

      <p className="sobre-mi__intro">
      Ingeniero Informático con experiencia en desarrollo de software y aplicaciones web. Actualmente compagino el desarrollo con la coordinación de proyectos, trabajando directamente con clientes, equipos y diferentes organizaciones. He participado en proyectos internacionales y en distintas fases del ciclo de vida del software, desde el desarrollo hasta la implantación y puesta en producción. 
      </p>

      <div className="sobre-mi__grid">
        <div className="sobre-mi__block">
          <h3 className="sobre-mi__subtitle">Datos personales</h3>
          <dl className="sobre-mi__data">
            {PERSONAL_DATA.map((item) => (
              <div key={item.label} className="sobre-mi__data-row">
                <dt>{item.label}</dt>
                <dd>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="sobre-mi__block">
          <h3 className="sobre-mi__subtitle">Intereses</h3>
          <ul className="sobre-mi__interests">
            {INTERESTS.map((interest) => (
              <li key={interest.id} className="sobre-mi__interest">
                <span
                  className={`sobre-mi__interest-icon sobre-mi__interest-icon--${interest.id}`}
                  aria-hidden="true"
                />
                <span>{interest.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
