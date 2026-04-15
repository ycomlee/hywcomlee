import React from 'react';

const ProjectItem = ({ project, onClick }) => {
  return (
    <div className="project-item" onClick={onClick}>
      <div className="project-image-wrap">
        <div className="project-image-placeholder-text">{project.image}</div>
        <img src={`${import.meta.env.BASE_URL}assets/images/${project.image}`} alt={project.title} style={{position:'relative', zIndex:1, width:'100%', height:'100%', objectFit:'cover'}} />
      </div>
      <div className="project-content">
        <div className="project-period">{project.period}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
