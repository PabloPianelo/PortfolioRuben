import React from 'react';
import { Building, Calendar, University } from 'lucide-react';
import './InfoSkill.css'; // Importa el archivo CSS

const InfoSkill = ({ id,titule, data, bgColor,icon }) => {
  
  const iconMap = {
    Building: Building,
    University : University ,
    
    // Add more icons as needed
  };

   const IconComponent = iconMap[icon];
  return (
    <section id={id} className={`experience-section-${bgColor}`}>
      <div className="container">
        <div className="header-container">
          <h2 className="section-title">
            {titule}
          </h2>
          <div className="divider"></div>
        </div>

        <div className="experiences-list">
          {data.map((exp, index) => (
            <div
              key={index}
              className="experience-card"
            >
              <div className="card-content">
                <div className="icon-wrapper">
                  <div className={"icon-container gradient-emerald"}>
                  <IconComponent className="icon" />
                  </div>
                </div>

                <div className="text-content">
                  <div className="info-header">
                    <div>
                      <h3 className="job-title">
                        {exp.title}
                      </h3>
                      <div className="company">
                        {exp.school||exp.company}
                      </div>
                    </div>
                    <div className="period-container">
                      <Calendar className="calendar-icon" />
                      {exp.date}
                    </div>
                  </div>

                  {/* <div className="location-container">
                    <ChevronRight className="chevron-icon" />
                   
                  </div>

                  <ul className="description-list">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="description-item">
                        <div className="bullet-point"></div>
                        <span className="description-text">{item}</span>
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSkill;