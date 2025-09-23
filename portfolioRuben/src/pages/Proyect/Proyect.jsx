import React from 'react';
import { ExternalLink, Calendar, Tag, Users } from 'lucide-react';
import './Proyect.css';

const Projects = () => {
  const projects = [
    {
      title: 'Cultivos Resistentes a Sequía',
      description: 'Desarrollo de variedades de trigo modificadas genéticamente para resistir condiciones de escasez hídrica, aumentando la productividad en zonas áridas.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
      tags: ['CRISPR', 'Genética', 'Sostenibilidad'],
      period: '2023 - Presente',
      team: '6 investigadores',
      impact: 'Incremento del 35% en rendimiento',
      status: 'En desarrollo',
      color: 'from-emerald-500 to-green-500'
    },
    {
      title: 'Sistema IoT para Agricultura de Precisión',
      description: 'Implementación de sensores inteligentes para monitoreo en tiempo real de humedad del suelo, nutrientes y condiciones ambientales.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
      tags: ['IoT', 'Big Data', 'Sensores'],
      period: '2022 - 2023',
      team: '4 investigadores',
      impact: 'Reducción del 40% en uso de agua',
      status: 'Completado',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Biocontrol de Plagas Agrícolas',
      description: 'Investigación y desarrollo de agentes biológicos para el control sostenible de plagas, reduciendo el uso de pesticidas químicos.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
      tags: ['Biocontrol', 'Microbiología', 'Ecología'],
      period: '2021 - 2022',
      team: '5 investigadores',
      impact: 'Reducción del 60% en pesticidas',
      status: 'Publicado',
      color: 'from-teal-500 to-blue-500'
    },
    {
      title: 'Mejora Nutricional en Cultivos',
      description: 'Biofortificación de cultivos básicos para aumentar el contenido de vitaminas y minerales esenciales, combatiendo la malnutrición.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
      tags: ['Biofortificación', 'Nutrición', 'Salud Pública'],
      period: '2020 - 2021',
      team: '8 investigadores',
      impact: 'Aumento del 50% en hierro y zinc',
      status: 'Completado',
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'En desarrollo': return 'status-yellow';
      case 'Completado': return 'status-green';
      case 'Publicado': return 'status-blue';
      default: return 'status-gray';
    }
  };
  const getProjectGradient = ( color) => {
    switch (color) {
      case 'from-emerald-500 to-green-500': return 'gradient-emerald-green';
      case 'from-green-500 to-teal-500': return 'gradient-green-teal';
      case 'from-teal-500 to-blue-500': return 'gradient-teal-blue';
      case 'from-blue-500 to-indigo-500': return 'gradient-blue-indigo';
      default: return '';
    }
  };

  return (
    <section id="proyectos" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">
            Proyectos de Investigación
          </h2>
          <div className="title-divider"></div>
          <p className="projects-description">
            Proyectos innovadores que combinan ciencia de vanguardia con aplicaciones prácticas 
            para una agricultura más sostenible y productiva
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className={`project-status ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>
                <div className={`project-card-divider ${getProjectGradient(project.color)}`}></div>
              </div>

              <div className="project-content">
                <h3 className="project-title-sm">
                  {project.title}
                </h3>
                
                <p className="project-description-sm">
                  {project.description}
                </p>

                <div className="project-details">
                  <div className="project-detail-item">
                    <Calendar className="project-icon" />
                    {project.period}
                  </div>
                  <div className="project-detail-item">
                    <Users className="project-icon" />
                    {project.team}
                  </div>
                </div>

                <div className="project-impact-box">
                  <div className="project-impact-title">
                    Impacto Principal
                  </div>
                  <div className="project-impact-text">
                    {project.impact}
                  </div>
                </div>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="project-tag"
                    >
                      <Tag className="project-tag-icon" />
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="project-button">
                  Ver Detalles
                  <ExternalLink className="project-button-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
