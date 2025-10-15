import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ContactForm from './ContactForm';
import About from './About';
import { Animated } from 'react-animated-css';

function Body() {

  return (
    <Container>
      <Animated animationIn="zoomIn">
        <span className="anchor" id="about" />
        <section id="about-section">
          <Row className="justify-content-center mt-5">
            <Col md="10" xs="12">
              <About />
            </Col>
          </Row>
        </section>
        <span className="anchor" id="contact" />
        <section id="contact-section">
          <Row className="justify-content-center mt-4 contact-row">
            <Col md="6" xs="12">
              <h2 className="contact text-center text-light mb-3">Contact</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <ContactForm />
          </Row>
        </section>
      </Animated>
    </Container>
  );

}

export default Body;
