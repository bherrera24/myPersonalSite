import AboutMeImg from "../assets/AboutMe.png";

const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="about-heading">About Me</h1>
     <div className="about-img-wrapper">
        <img src={AboutMeImg} alt="Working on a computer" />
     </div>

   <p className="intro">
  👩🏻‍💻 Full Stack Developer with +10 years of experience, specializing in frontend development with React and TypeScript, and a solid backend foundation in Node.js and SQL.  
  <br />
  Open to full stack roles where I can leverage my expertise to build scalable and maintainable applications.
  <br /><br />
  🎯 I have worked in industries such as airlines, healthcare, telecommunications, and technology, delivering solutions that improve performance and user experience.  
  <br />
  Passionate about clean code, continuous improvement, and collaboration in agile teams.
</p>

      <span>📍 Based in Santiago, Chile</span>
    


 

      <section className="about-section">
        <h3>🛠️ Tools & Technologies</h3>
        <ul>
          <li><strong>Languages & Libraries:</strong> <span className="tech">JavaScript</span>, <span className="tech">TypeScript</span>, <span className="tech">React</span>, <span className="tech">Next.js</span>, <span className="tech">Material UI</span>, Design Systems</li>
          <li><strong>Backend:</strong> <span className="tech">Node.js</span>, <span className="tech">REST APIs</span></li>
          <li><strong>Databases:</strong> <span className="tech">PostgreSQL</span>, <span className="tech">Redis</span></li>
          <li><strong>Cloud:</strong> <span className="tech">Google Cloud Platform</span>, <span className="tech">AWS EC2</span></li>
          <li><strong>Testing:</strong> <span className="tech">Jest</span>, <span className="tech">Cypress</span></li>
          <li><strong>Infrastructure:</strong> <span className="tech">Terraform</span>, <span className="tech">Kubernetes</span>, <span className="tech">Docker</span>, CI/CD (CircleCI, GitHub Actions)</li>
        </ul>
      </section>

      <section className="experience">
        <h3>💼 Professional Experience</h3>

        <div className="job">
          <h4>💻 Frontend Developer – <span className="company">ThoughtWorks (Ipsos)</span> <span className="date">| Feb 2024 – Present</span></h4>
          <ul>
            <li>Specialized in front-end implementation using <span className="tech">TypeScript</span>, <span className="tech">React.js</span>, <span className="tech">Next.js</span>, and <span className="tech">Material UI</span>.</li>
            <li>Achieved <span className="highlight">90% unit test coverage</span> reducing regression bugs by <span className="highlight">30%</span>.</li>
            <li>Focused work on program/project/job/quote management. <span className="method">Scrum</span> methodology.</li>
          </ul>
        </div>
        <hr />

        <div className="job">
          <h4>☁️ DevOps Engineer – <span className="company">ThoughtWorks (LATAM Airlines)</span> <span className="date">| Jan 2023 – Jan 2024</span></h4>
          <ul>
            <li>Managed <span className="tech">GCP</span> infrastructure with <span className="tech">Terraform</span>, <span className="tech">Terragrunt</span>, <span className="tech">Kubernetes</span>, and <span className="tech">Docker</span>.</li>
            <li>Improved <span className="highlight">SRE metrics</span> by <span className="highlight">15%</span> through observability initiatives and CI/CD pipelines.</li>
            <li>Implemented automated pipelines and monitoring solutions. <span className="method">Kanban</span> methodology.</li>
          </ul>
        </div>
        <hr />

        <div className="job">
          <h4>🧩 Full Stack Developer & Feature Lead – <span className="company">ThoughtWorks (Telus)</span> <span className="date">| Jan 2020 – Dec 2022</span></h4>
          <ul>
            <li>Developed UIs with <span className="tech">ReactJS</span> and <span className="tech">TELUS Design System</span>.</li>
            <li>Built <span className="tech">REST APIs</span> with <span className="tech">NodeJS</span>, integrating with the frontend.</li>
            <li>Maintained quality with <span className="tech">Jest</span>, achieving <span className="highlight">80% coverage</span> and reducing post-deployment bugs by <span className="highlight">12%</span>.</li>
            <li>Feature Lead for discount campaign cart flows, coordinating with business stakeholders. <span className="method">Scrum</span> methodology.</li>
          </ul>
        </div>
        <hr />

        <div className="job">
          <h4>🧬 Full Stack Developer – <span className="company">ThoughtWorks (Luis Calvo Mackenna Children's Hospital)</span> <span className="date">| May 2019 – Oct 2019</span></h4>
          <ul>
            <li>Developed an MVP with <span className="tech">Next.js</span>, <span className="tech">React.js</span>, <span className="tech">Node.js</span>, and <span className="tech">PostgreSQL</span>.</li>
            <li>Ensured quality with <span className="tech">Jest</span> and <span className="tech">Cypress</span>, deploying via <span className="tech">CircleCI</span> to <span className="tech">AWS EC2</span>.</li>
            <li>Reduced project scope by <span className="highlight">20%</span> accelerating time-to-market.</li>
          </ul>
        </div>
        <hr />

        <div className="job">
          <h4>✈️ Full Stack Developer – <span className="company">ThoughtWorks (LATAM Airlines)</span> <span className="date">| Apr 2017 – Jan 2019</span></h4>
          <ul>
            <li>Migrated a legacy system from <span className="tech">Perl</span> to <span className="tech">Java API</span> and <span className="tech">React.js</span>.</li>
            <li>Applied <span className="method">TDD</span>, improving performance by <span className="highlight">45%</span> and reducing maintenance costs by <span className="highlight">50%</span>.</li>
            <li>Implemented A/B testing increasing conversion rates by <span className="highlight">35%</span>. <span className="method">Kanban</span> methodology.</li>
          </ul>
        </div>
        <hr />

        <div className="job">
          <h4>🏢 Consultant Java Developer – <span className="company">Deloitte</span> <span className="date">| Feb 2015 – Jan 2017</span></h4>
          <ul>
            <li>Built core insurance apps with <span className="tech">Java</span> and <span className="tech">RESTful web services</span>.</li>
            <li>Used <span className="tech">Docker</span>, <span className="tech">GIT</span>, and <span className="tech">JIRA</span> to streamline development workflows.</li>
            <li>Automated policy generation, achieving a <span className="highlight">90% reduction</span> in manual processes.</li>
          </ul>
        </div>
      </section>

    <div className="job"></div>
        <h4>🎓 Education</h4>
        <ul>
          <li> Bachelor of Computer Engineering – Andrés Bello Catholic University (UCAB), Venezuela (2003–2010)</li>
        </ul>
    </div>
  );
};

export default About;
