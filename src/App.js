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
      <Cabecera></Cabecera>
      <section id='inicio'>
          <Inicio></Inicio>
        </section>
        <section id='sobremi'>
          <SobreMi></SobreMi>
        </section>
        <section id='skills'>
          <Skills></Skills>
        </section>
        <section id='curriculum'>
          <Curriculum></Curriculum>
        </section>
        <section id='proyectos'>
          <Proyectos></Proyectos>
        </section>
        <section id='contacto'>
          <Contacto></Contacto>
        </section>
        <section id='footer'>
          <Footer></Footer>
        </section>
    </div>
  );
}



//MODIFICAR CV PDF
//CAMBIAR PAG WEB EN SOBRE MI
//SUBIR
export default App;
