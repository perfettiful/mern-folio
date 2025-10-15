import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ContactForm from './ContactForm';
import About from './About';
import YouTube from './YouTube';

function Body() {

  return (
    <Container>
      <span className="anchor" id="about" />
      <section id="about-section">
        <Row className="justify-content-center mt-5">
          <Col md="10" xs="12">
            <About />
          </Col>
        </Row>
      </section>
      
      <span className="anchor" id="youtube-section" />
      <section id="youtube-section">
        <Row className="justify-content-center">
          <Col md="10" xs="12">
            <YouTube />
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
    </Container>
  );

}

export default Body;
