import React from 'react';
import { Col } from 'react-bootstrap';

const ProjectCard = ({ title, description, link, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className='proj-imgbox'>
        <img src={imgUrl} alt='showing interface of the project'/>
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <a className='visit-repo' href={link} target='_blank' rel='noreferrer'>Visit Repo</a>
    </Col>
  );
};

export default ProjectCard;