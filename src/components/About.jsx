import React from 'react';
import reactLogo from '../images/react.svg';
import angularLogo from '../images/angular.svg';
import typescriptLogo from '../images/typescript.svg';
import tailwindLogo from '../images/tailwindcss.svg';
import djangoLogo from '../images/django.svg';
import postgresqlLogo from '../images/postgresql.svg';
import dockerLogo from '../images/docker.svg';
import awsLogo from '../images/aws.svg';
import azureLogo from '../images/azure.png';
import dotnetLogo from '../images/dotnet.png';


const About = () => {
  const technologies = [
    { name: "React", logo: reactLogo, id: "react" },
    { name: "TypeScript", logo: typescriptLogo, id: "typescript" },
    { name: "Angular", logo: angularLogo, id: "angular" },
    { name: "Tailwind CSS", logo: tailwindLogo, id: "tailwindcss" },
    { name: "Django", logo: djangoLogo, id: "django" },
    { name: "PostgreSQL", logo: postgresqlLogo, id: "postgresql" },
    { name: "Docker", logo: dockerLogo, id: "docker" },
    { name: "AWS", logo: awsLogo, id: "aws" },
    { name: "Azure", logo: azureLogo, id: "azure" },
    { name: ".NET", logo: dotnetLogo, id: "dotnet" },
  ];

  return (
    <div className="card shadow mx-auto mt-4">
      <div className="card-body text-center">
        <div className='circular-image'>
          <img alt="profile" width='100%' className='profileImg' src='/prof-pic.jpeg' />
        </div>
        <h4 className="title">Nathan Perfetti</h4>
        <h5 className="title2 font-italic">Seasoned Software Engineer</h5>

        <p className="card-text px-4 py-4">
          I build scalable web applications using modern technologies and frameworks. 
          Focused on delivering clean, efficient solutions for complex problems. 
        </p>
        <h5 className="title2 font-italic">Technologies I Use</h5>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div className="tech-item" key={index}>
              <div className="svg-img" id={tech.id}>
                <img src={tech.logo} alt={tech.name} />
              </div>
              <div className="svgNames">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
