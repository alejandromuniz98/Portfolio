import './Footer.css';
import SocialLinks from '../components/SocialLinks';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <a href="#inicio" className="footer__top" aria-label="Volver arriba">
          ↑
        </a>
        <p className="footer__copy">
          Alejandro Muñiz Berdasco © {year}
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}

export default Footer;
