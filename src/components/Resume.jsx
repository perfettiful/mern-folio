import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Resume = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md="12" xs="12">
          <div style={{ width: '100%', height: '85vh', padding: '10px' }}>
            <iframe
              src="/NathanPerfetti-Resume-1025.pdf"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Nathan Perfetti Resume"
            >
              <p>Your browser does not support PDFs. 
                <a href="/NathanPerfetti-Resume-1025.pdf" target="_blank" rel="noopener noreferrer">
                  Download the PDF
                </a>
              </p>
            </iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
