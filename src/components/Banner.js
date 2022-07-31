import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import HeaderImg from '../assets/images/header-img.JPG';

const Banner = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ 'Front-end Developer', 'React js Developer'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker)};
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updateText);

    if(isDeleting) {
      setDelta(prevDelta => prevDelta /2)
    }

    if(!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if(isDeleting && updateText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align=items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>Hi, I'm<br />a <span className='wrap'>{text}</span></h1>
            <p>My name is Dursun, I’m passionate about learning and building things that live on the internet.
              I started learning web development when I got to create my first simple page using HTML and CSS.
              Since then, I was hooked on the idea of being able to create something that uses creativity and logic at the same time. 
              Fast-forward to today, I’ve enjoyed learning the web world alongside with problem solving technologies it requires.
              The problem solving part of the development is the most exciting one for me.
              I get to test my ability to find answers from information I soaked in before; just like I did in my projects below.
              I’m now looking for junior dev position to finally kick start my career and learn among professionals.
              You can find my contact information <a href='#footer'>here.</a></p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={HeaderImg} alt='profile look' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;