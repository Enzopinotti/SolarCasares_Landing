import React, { useState, useRef } from 'react';

const Card = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <div className="card-title">
        <h3>{title}</h3>
        <img 
          src="https://fedesagency.com/solarCaseres/flechaAbajo.png" 
          alt="arrow" 
          className={`arrow ${isExpanded ? 'expanded' : ''}`} 
        />
      </div>
      <div
        className="card-description"
        ref={contentRef}
        style={{ maxHeight: isExpanded ? `${contentRef.current.scrollHeight}px` : '0px' }}
      >
        {description}
      </div>
    </div>
  );
};

export default Card;