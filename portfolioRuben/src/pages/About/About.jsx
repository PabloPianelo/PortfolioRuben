import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, BriefcaseBusiness } from 'lucide-react';
import profileImage from '../../assets/Ruben-image.PNG';
import './About.css';
import { certificadosData, educationData, experienceData } from '../../data/data';

const About = () => {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">Sobre Mí</h2>
          <div className="about-divider"></div>
        </div>

        <div className="about-content">
          <div className="image-and-text-container">
            {/* Contenedor de la imagen */}
            <div className="profile-image-container">
              <img 
                src={profileImage} 
                alt="Foto de perfil de la persona" 
                className="profile-image" 
              />
            </div>
            {/* Texto de descripción */}
            <div className="about-details">
              <p className="about-text">
                Soy un biólogo apasionado por la aplicación de la ciencia en la agricultura sostenible. 
                Mi enfoque se centra en el desarrollo de soluciones biotecnológicas que mejoren la 
                productividad agrícola mientras preservan el medio ambiente.
              </p>
              
              <p className="about-text">
                A lo largo de mi carrera, he trabajado en el desarrollo de cultivos resistentes a 
                enfermedades, optimización de sistemas de irrigación y implementación de técnicas 
                de agricultura de precisión utilizando análisis de suelos y bioestadística.
              </p>

              <div className="about-info-grid">
                <div className="about-info-item location-item">
                  <MapPin className="icon" />
                  <div>
                    <div className="info-title">Ubicación</div>
                    <div className="info-text">Murcia, España</div>
                  </div>
                </div>
                
                <div className="about-info-item availability-item">
                  <Calendar className="icon" />
                  <div>
                    <div className="info-title">Disponibilidad</div>
                    <div className="info-text">Ocupado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-credentials">
            <div className="credential-box education-box">
              <div className="credential-header">
                <GraduationCap className="icon" />
                <h3 className="credential-title-h3">Educación</h3>
              </div>
              {educationData.map((education) => (
              <div className="credential-item-list">
                <div>
                  <div className="credential-item-title">{education.title}</div>
                  <div className="credential-item-school">{education.school}</div>
                  <div className="credential-item-date">{education.date}</div>
                </div>
              </div>
              ))}
            </div>

             <div className="credential-box education-box">
              <div className="credential-header">
                <BriefcaseBusiness className="icon" />
                <h3 className="credential-title-h3">Experiencia</h3>
              </div>
              {experienceData.map((experience) => (
              <div className="credential-item-list">
                <div>
                  <div className="credential-item-title">{experience.title}</div>
                  <div className="credential-item-school">{experience.company}</div>
                  <div className="credential-item-date">{experience.date}</div>
                </div>
              </div>
              ))}
            </div>


            

            <div className="credential-box certifications-box education-box">
              <div className="credential-header">
                <Award className="icon" />
                <h3 className="credential-title-h3">Certificaciones</h3>
              </div>
              <div className="credential-item-list certification-list">
                {certificadosData.map((certificado) => (
                <div className="certification-item">
                  <span className="certification-name">{certificado.title}</span>
                  {/* <span className="certification-year">2023</span> */}
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;