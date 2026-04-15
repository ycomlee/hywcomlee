import React, { useEffect } from 'react';

const Modal = ({ project, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent closing when clicking inside modal content
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        
        <div className="modal-hero">
           <div className="project-image-placeholder-text" style={{fontSize: '1.5rem'}}>{project.image}</div>
           <img src={`/assets/images/${project.image}`} alt={project.title} style={{position:'relative', zIndex:1, width:'100%', height:'100%', objectFit:'cover'}} />
        </div>
        
        <div className="modal-body">
          <div className="modal-meta">{project.period}</div>
          <h2 className="modal-title">{project.title}</h2>
          
          <div className="modal-section">
            <h4>Goal</h4>
            <p>{project.goal}</p>
          </div>
          
          <div className="modal-section">
            <h4>Process</h4>
            <p>{project.process}</p>
          </div>
          
          <div className="modal-section">
            <h4>Result</h4>
            <p>{project.result}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
