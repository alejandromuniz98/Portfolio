import './App.css';
import Cabecera from './Cabecera/Cabecera';
import Inicio from './Inicio/Inicio';
import SobreMi from './SobreMi/SobreMi';
import Skills from './Skills/Skills';
import Curriculum from './Curriculum/Curriculum';
import Proyectos from './Proyectos/Proyectos';
import Contacto from './Contacto/Contacto';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <a href="#inicio" className="skip-link">
        Saltar al contenido
      </a>
      <Cabecera />
      <main>
        <section id="inicio" aria-label="Presentación">
          <Inicio />
        </section>
        <section id="sobremi" aria-label="Sobre mí">
          <SobreMi />
        </section>
        <section id="skills" aria-label="Habilidades técnicas">
          <Skills />
        </section>
        <section id="curriculum" aria-label="Experiencia y formación">
          <Curriculum />
        </section>
        <section id="proyectos" aria-label="Proyectos">
          <Proyectos />
        </section>
        <section id="contacto" aria-label="Contacto">
          <Contacto />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
