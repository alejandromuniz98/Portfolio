import './Cabecera.css';
import { useState } from 'react';

const NAV_ITEMS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobremi', label: 'Sobre mí' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#curriculum', label: 'Trayectoria' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
];

function Cabecera() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="cabecera">
      <div className="cabecera__inner container">
        <a className="cabecera__logo" href="#inicio" onClick={closeMenu}>
          Alejandro
        </a>

        <button
          type="button"
          className="cabecera__toggle"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="cabecera__toggle-bar" />
          <span className="cabecera__toggle-bar" />
          <span className="cabecera__toggle-bar" />
        </button>

        <nav
          id="nav-menu"
          className={`cabecera__nav ${menuOpen ? 'cabecera__nav--open' : ''}`}
          aria-label="Navegación principal"
        >
          <ul className="cabecera__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  className="cabecera__link"
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Cabecera;
