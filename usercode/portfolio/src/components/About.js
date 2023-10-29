import React, { useEffect, useState } from 'react';
import IMG from '../assets/AboutMe.png';


const showImg= cambia => cambia?(
    <div className="about-img">
        <div className="about-img-wrapper">
            <img src={IMG} alt="AboutMe" />
        </div>
    </div>
  ):null


const About = () => {

    const [isMobile, setIsMobile] = useState(false);
    const mobile = isMobile? "mobile" : ""
    useEffect(() => {
        // Función para verificar el ancho de la pantalla
        const checkIsMobile = () => {
          setIsMobile(window.innerWidth <= 768); // Puedes ajustar este valor según tus necesidades
        };
    
        // Verificar inicialmente el tamaño de la pantalla
        checkIsMobile();
    
        // Agregar un event listener para verificar cambios en el tamaño de la pantalla
        window.addEventListener('resize', checkIsMobile);
    
        // Limpieza del event listener cuando el componente se desmonta
        return () => {
          window.removeEventListener('resize', checkIsMobile);
        };
      }, []);
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <div className={`about-description-${mobile}`}>
                 I genuinely enjoy using technical innovation to overcome business challenges and bring improvements. Analytical, client-centered and solutions-driven Software Developer with extensive experience in leading the development and application of sophisticated software solutions in the aerospace, healthcare and telecommunications sectors. Expert in providing highly technical knowledge and analysis of specialized applications, identifying and investigating application problems, performing root cause analysis, and implementing an action plan for the resolution and dissemination of conclusions. Decidedly skilled in both backend and frontend development with the ability to design, create and evolve user-facing applications to be scalable, maintainable and usable using a combination of languages and client-side scripts and frameworks. I am recognized for abilities to bridge gaps between business and technology and envision the bigger picture. My core areas of strength include: 
                    <ul>
                     <li>Full Stack Development</li>
                     <li>DevOps Culture</li>
                     <li>Process Improvement</li>
                     <li>Creative & Critical Thinking</li>
                     <li> Software Architecture</li>
                  </ul>
                  Technical Proficiencies Include: Programming Languages: JavaScript, CSS, HTML, NodeJS, Java | Databases: PostgreSQL, MySQL Testing Tools: React Testing Library, Jest, Cypress | Version Tools: Git | Project Management Tools: GitHub, Trello, Jira, Confluence Analysis of data: Splunk | Methodologies: Kanban, Scrum, CI/CD, TDD | Cloud Infrastructure: Google Cloud Platform, Terraform, Terragrunt | Datastreaming Platform: Confluent Kafka | Others: Chakra UI, Sass, NodeJS, MySQL, PostgreSQL, Flyway|

                    HIGHLIGHTS: 
                    <ul>
                    <li>Expert in advanced development methodologies, tools, and processes contributing to the design and rollout of cutting-edge software applications. Repeatedly recognized for providing optimal and impeccable services.</li>
                    <li>Capacity to use analytical tools to deliver innovative and creative solutions to maximize development efficiency.</li>
                    <li>Ability to quickly understand complex technical issues and a willingness to go ‘extra mile’ to get things done.</li>
                    <li>Prior employers include Deloitte, Telus Communications, LATAM Airlines, Social Change Laboratory.</li>
                </ul>
                </div>
                { showImg(!isMobile)}
            </div>
         
            <div className="about-technical-skills">
                <p>
                     
                </p>
         
               
         
           </div> 
        </div>
    )
}

export default About;