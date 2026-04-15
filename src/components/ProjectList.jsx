import React, { useState, useEffect } from 'react';
import ProjectItem from './ProjectItem';
import Modal from './Modal';
import projectsData from '../data/projects.json';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Simulate network delay to show Skeleton UI
    const timer = setTimeout(() => {
      setProjects(projectsData);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="container">
      <div className="text-center mb-4">
        <h2>Projects</h2>
        <p>핵심 성과를 창출해낸 주요 프로젝트 경험입니다.</p>
      </div>

      <div className="project-stack">
        {isLoading
          ? Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="project-item" style={{ height: '240px' }}>
                <div className="project-image-wrap skeleton"></div>
                <div className="project-content">
                  <div className="skeleton mb-1" style={{ height: '20px', width: '30%', borderRadius: '4px' }}></div>
                  <div className="skeleton mb-2" style={{ height: '32px', width: '70%', borderRadius: '4px' }}></div>
                  <div className="skeleton mb-1" style={{ height: '16px', width: '100%', borderRadius: '4px' }}></div>
                  <div className="skeleton" style={{ height: '16px', width: '80%', borderRadius: '4px' }}></div>
                </div>
              </div>
            ))
          : projects.map((project) => (
              <ProjectItem 
                key={project.id} 
                project={project} 
                onClick={() => handleOpenModal(project)} 
              />
            ))}
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProjectList;
