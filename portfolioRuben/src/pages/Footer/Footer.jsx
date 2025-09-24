import React from "react";
import { Microscope, Linkedin, Mail, Phone } from "lucide-react";
import "./Footer.css"; // Import the new CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
   
    {
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:biologo.agro@email.com",
      label: "Email",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      url: "tel:+34123456789",
      label: "Teléfono",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="brand-logo-container">
              <div className="microscope-icon">
                <Microscope />
              </div>
              <a href="#inicio" className="brand-name">
                Rubén López
              </a>
            </div>
            <p className="brand-description">
              Especialista en biología comprometido con el desarrollo de nuevas
              soluciones sostenibles para la agricultura del futuro.
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-section">
            <h3 className="section-heading">Navegación</h3>
            <ul className="navigation-list">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "sobre-mi", label: "Sobre Mí" },
                { id: "educacion", label: "Educación" },
                { id: "experiencia", label: "Experiencia" },
                { id: "proyectos", label: "Proyectos" },
                { id: "contact", label: "Contacto" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="navigation-button"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="section-heading">Contacto Directo</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Mail className="h-5 w-5 text-emerald-400" />
                <a href="mailto:lopezzamora2212@gmail.com">
                  lopezzamora2212@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <Phone className="h-5 w-5 text-emerald-400" />
                <a href="tel:+34123456789">+34 123 456 789</a>
              </div>
            </div>
           
          </div>
        </div>

        <div className="copyright-divider">
          <p className="copyright-text">
            © {currentYear} Dr. BioAgro. Todos los derechos reservados.
            Desarrollado con React y CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
