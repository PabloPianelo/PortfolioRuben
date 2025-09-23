import React, { useState, useEffect } from 'react';
import { Menu, X, Microscope } from 'lucide-react';
import './Navegation.css'; // Import the new CSS file

const Navegation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'educacion', label: 'Educación' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <header
      className={`header ${isScrolled ? 'header-scrolled' : ''}`}
    >
      <div className="header-container">
        <div className="header-content">
          <div
            className="brand-logo"
            onClick={() => scrollToSection('inicio')}
          >
            <div className="microscope-icon">
              <Microscope className="h-6 w-6 text-white" />
            </div>
            <span className="brand-titule">
              Dr. Ruben
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mobile-nav-container">
            <div className="mobile-nav">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="mobile-nav-link"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navegation;