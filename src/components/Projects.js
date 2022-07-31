import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';

import ProjectCard from './ProjectCard';
import projImg1 from '../assets/images/project-img1.png';
import projImg2 from '../assets/images/project-img2.png';

const Projects = () => {

  const projects = [
    {
      title: 'Fitness App',
      description: 'With features such as: browsing, choosing among categories and examples, and displaying recommendations.',
      link: 'https://github.com/drizzyDey/fitness-app',
      imgUrl: projImg1
    },
    {
      title: 'Login Page',
      description: 'Built React js front-end of the login page with REST API',
      link: 'https://github.com/drizzyDey/login-page',
      imgUrl: projImg2
    }
  ];
  return (
    <section className='projects' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>My TECH STACK is: JavaScript/ES6, HTML5 and CSS3, React js, Redux, React Router 6, Material UI, Bootstrap, SaaS, jQuery, json, Git</p>
              <Row>
                {
                  projects.map((project, index) => {
                    return (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    )
                  })
                }
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;