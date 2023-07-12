import './Cabecera.css';
import React, { useRef } from 'react';

function Cabecera() {
  const nav = useRef();
  var  menuVisible=false;

  function mostrarOcultarMenu(){
    if(menuVisible){
      nav.current.classList.remove("Cabecera_navbar_nav_responsive");
      menuVisible = false;
    }else{
      nav.current.classList.add("Cabecera_navbar_nav_responsive");
      menuVisible = true;
    }
  }

  
  
  return (
    <div className='Cabecera'>
      <header className="Cabecera_header">

        <div className='Cabecera_logo'>
          <a className='Cabecera_logo_text' href='#inicio'>Alejandro</a>
        </div>

        <div className='Cabecera_navbar'>
          <nav ref={nav}>
            <ul className='Cabecera_navbar_ul'>
              <li>
                <a className='Cabecera_navbar_item' href="#inicio">INICIO</a>
              </li>
              <li >
                <a className='Cabecera_navbar_item' href="#sobremi">SOBRE MI</a>
              </li>
              <li >
                <a className='Cabecera_navbar_item' href="#skills">SKILLS</a>
              </li>
              <li >
                <a className='Cabecera_navbar_item' href="#curriculum">CURRICULUM</a>
              </li>
              <li >
                <a className='Cabecera_navbar_item' href="#proyectos">PROYECTOS</a>
              </li>
              <li >
                <a className='Cabecera_navbar_item' href="#contacto">CONTACTO</a>
              </li>
            </ul>
          </nav>
          <div className="Cabecera_navbar_responsive" onClick={mostrarOcultarMenu}>
            <div className='Cabecera_navbar_responsive_image'></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Cabecera;
