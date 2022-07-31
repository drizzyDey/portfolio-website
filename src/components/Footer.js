import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from '../assets/icons/nav-icon1.png';
import navIcon2 from '../assets/icons/nav-icon2.png';
import navIcon3 from '../assets/icons/nav-icon3.png'

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p>CONTACT INFORMATION</p>
            <ul>
              <li>Name: Dursun Rejepova</li>
              <li>Location: Bishkek, Kyrgyzstan</li>
              <li>Email: khasanovader@gmail.com</li>
              <li>Phone number: +996(551)401207</li>
            </ul>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Let's Connect via:</p>
            <div className="social-icon">
              <a href='https://www.linkedin.com/in/dursun-rejepova' target='_blank' rel="noreferrer"><img src={navIcon1} alt='Linkedin Icon' /></a>
              <a href='https://github.com/drizzyDey' target='_blank' rel="noreferrer"><img src={navIcon2} alt="Github Icon" /></a>
              <a href='https://www.instagram.com/drizzy_dey/' target='_blank' rel="noreferrer"><img src={navIcon3} alt="Instagram Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;