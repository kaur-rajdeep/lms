import './PMCard.css'
import React from 'react';

const PMCard = ({ data }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="image-container">
          <img src={`${data.image}`} alt="Cybersecurity Module" />
        </div>
        <div className="module-info">
          <h2>Module {data.moduleNumber}</h2>
          <hr className="divider"/>
          <h4 className='title'>{data.title}</h4>
          <div className="topic-time-container">
            <span className="topic-value">{data.topics} </span>
            <span className="time-value"> {data.duration}</span>
          </div>
          <span className='learningStyles'><strong>{data.learningStyle}</strong></span>
        </div>
      </div>
    </div>
  );
};

export default PMCard;