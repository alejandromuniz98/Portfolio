import './Skills.css';
import SectionHeading from '../components/SectionHeading';

const SKILL_GROUPS = [
  {
    title: 'Backend',
    skills: [
      { id: 'NET', name: '.NET Framework' },
      { id: 'C', name: 'C#' },
      { id: 'REST', name: 'API RESTful' },

    ],
  },
  {
    title: 'Frontend',
    skills: [
      { id: 'HTML', name: 'HTML' },
      { id: 'CSS', name: 'CSS' },
      { id: 'JavaScript', name: 'JavaScript' },
      { id: 'React', name: 'React' },
      { id: 'Bootstrap', name: 'Bootstrap' },
      { id: 'Blazor', name: 'Blazor' },
    ],
  },
  {
    title: 'Cloud y datos',
    skills: [
      { id: 'DevExpress', name: 'DevExpress' },
      { id: 'Azure', name: 'Azure' },
      { id: 'SQL', name: 'SQL' },
    ],
  },
];

function Skills() {
  return (
    <div className="skills container">
      <SectionHeading>Habilidades técnicas</SectionHeading>

      <div className="skills__groups">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="skills__group">
            <h3 className="skills__group-title">{group.title}</h3>
            <ul className="skills__list">
              {group.skills.map((skill) => (
                <li key={skill.id} className="skills__item">
                  <span
                    className={`skills__icon skills__icon--${skill.id.toLowerCase()}`}
                    aria-hidden="true"
                  />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
