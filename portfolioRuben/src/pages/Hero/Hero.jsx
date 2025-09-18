import React from 'react';
import './Hero.css';
import {  Leaf, Sprout, Download, FlaskConical, FlaskRound } from 'lucide-react';
import RubenCV from '../../assets/CV_Ruben_Lopez.pdf';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero__decorative hero__decorative--leaf">
        <Leaf className="hero__icon" />
      </div>
      <div className="hero__decorative hero__decorative--beaker">
        <FlaskConical className="hero__icon hero__icon--beaker" />
      </div>
      <div className="hero__decorative hero__decorative--sprout">
        <Sprout className="hero__icon hero__icon--sprout" />
      </div>
       <div className="hero__decorative hero__decorative--FlaskRound">
        <FlaskRound className="hero__icon hero__icon--sprout" />
      </div>
       

      <div className="hero__container">
        <div className="hero__container-inner">
          <h1 className="hero__title">
            <span className="hero__highlight-emerald">Rubén</span> 
            <br />
            <span className="hero__highlight-gradient">López Zamora</span>
          </h1>

          <p className="hero__subtitle">
            Especialista en biotecnología agrícola con más de 8 años de experiencia
            en investigación y desarrollo de soluciones sostenibles para la agricultura moderna.
          </p>

          <div className="hero__buttons">
            <button
              onClick={() => scrollToSection('contact')}
              className="button button--primary"
            >
              Contactar
            </button>
          
             <a
                className="button btn--download"
                href={RubenCV}
                download="CV_Ruben_López.pdf"
              >
                <Download size={20} /> Descargar CV
              </a>
           
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-number">2+</div>
              <div className="hero__stat-text">Años de Experiencia</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-number">2+</div>
              <div className="hero__stat-text">Proyectos Completados</div>
            </div>
            {/* <div className="hero__stat">
              <div className="hero__stat-number">15+</div>
              <div className="hero__stat-text">Publicaciones</div>
            </div> */}
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
