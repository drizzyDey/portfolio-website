import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';

import navIcon1 from '../assets/icons/nav-icon1.png';
import navIcon2 from '../assets/icons/nav-icon2.png';
import navIcon3 from '../assets/icons/nav-icon3.png';
import resume from '../assets/Resume Dursun.pdf'

const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <BrowserRouter>
      <Navbar expand='md' className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link
                href='#home'
                className={
                  activeLink === 'home' ?
                  'active navbar-link' :
                  'navbar-link'
                } onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href='#projects'
                className={
                  activeLink === 'projects' ?
                  'active navbar-link' :
                  'navbar-link'
                } onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className='navbar-text'>
              <div className='social-icon'>
                <a href='https://www.linkedin.com/in/dursun-rejepova' target='_blank' rel="noreferrer"><img src={navIcon1} alt='Linkedin Icon' /></a>
                <a href='https://github.com/drizzyDey' target='_blank' rel="noreferrer"><img src={navIcon2} alt='Github Icon' /></a>
                <a href='https://www.instagram.com/drizzy_dey/' target='_blank' rel="noreferrer"><img src={navIcon3} alt='Instagram Icon' /></a>
              </div>
              <button className='vvd'><a href={resume} download><span>Download My Resume</span></a></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BrowserRouter>
  )
}

export default NavBar;