import './SocialLinks.css';

function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links ${className}`}>
      <a
        className="social-links__item social-links__item--linkedin"
        href="https://www.linkedin.com/in/alejandro-muniz-ber"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <span className="visually-hidden">LinkedIn</span>
      </a>
      <a
        className="social-links__item social-links__item--github"
        href="https://www.github.com/alejandromuniz98"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <span className="visually-hidden">GitHub</span>
      </a>
      <a
        className="social-links__item social-links__item--email"
        href="mailto:alejandromb98@gmail.com"
        aria-label="Enviar email"
      >
        <span className="visually-hidden">Email</span>
      </a>
    </div>
  );
}

export default SocialLinks;
