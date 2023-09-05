import React, { useState } from 'react';
import { ReactComponent as HTML } from '../images/html5.svg';
import { ReactComponent as CSS } from '../images/css3.svg';
import { ReactComponent as JS } from '../images/javascript.svg';
import { ReactComponent as JQuery } from '../images/jquery.svg';
import { ReactComponent as ReactImage } from '../images/react.svg';
import { ReactComponent as MySQL } from '../images/mysql.svg';
import { ReactComponent as Mongo } from '../images/mongodb.svg';
import { ReactComponent as Firebase } from '../images/firebase.svg';
import { ReactComponent as Node } from '../images/node-dot-js.svg';
import { ReactComponent as Python } from '../images/python.svg';
import { ReactComponent as Django } from '../images/django.svg';
import { ReactComponent as Git } from '../images/git.svg';


const About = () => {
  const images = [
    <HTML name="HTML5" id="html" />,
    <CSS name="CSS3" id="css" />,
    <JS name="JS ES6+" id="js" />,
    <JQuery name="jQuery" id="jquery" />,
    <ReactImage name="React" id="react" />,
    <MySQL name="MySQL" id="mysql" />,
    <Mongo name="MongoDB" id="mongo" />,
    <Firebase name="Firebase" id="firebase" />,
    <Node name="Node.js" id="node" />,
    <Python name="Python" id="python" />,
    <Django name="Django" id="django" />,
    <Git name="Git" id="git" />,

  ];

  const [icons, updateImages] = useState(images);

  return (
    <div className="card shadow mx-auto mt-4">
      <div className="card-body text-center">
        <div className='circular-image'>
          <img alt="profile" width='100%' className='profileImg' src='https://raw.githubusercontent.com/perfettiful/mern-folio/main/public/NatePerfetti.png' />
        </div>
        <h4 className="title">Nathan Perfetti</h4>
        <h5 className="title2 font-italic">Certified Full Stack Web Developer & Educator</h5>
        <p className="card-text">nathanperfetti@gmail.com</p>

        <p className="card-text px-4 py-2">
          I believe strongly in the power of well-crafted software. Feel free to reach out for a collaborator or consultant on your next project. I enjoy
          learning new languages and building clean, responsive, and functional
          web apps using...
        </p>
        <div className="row mb-3">
          {icons.map((image, index) => (
            <div className="col-lg-2 col-md-3 col-4" key={index}>
              <div className="img-fluid svg-img p-2">{image}</div>
              <div className="my-1 svgNames">{image.props.name}</div>
            </div>
          ))}
        </div>
        <a
          className="github-button"
          href="https://github.com/perfettiful"
          data-size="large"
          aria-label="@perfettiful GitHub">
          @perfettiful GitHub
        </a>
        <div className="linked-in">
          <a
            className="linked-size btn btn-sm btn-outline-primary"
            id="linked-in"
            href="https://www.linkedin.com/in/nathanperfetti/"
            target="_blank"
            rel="noopener noreferrer">
            <i className="mx-1 linked-size fab fa-linkedin icon-small" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
