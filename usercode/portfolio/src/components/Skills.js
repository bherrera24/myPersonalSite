import { FaJs, FaReact, FaGithub, FaDocker, FaNodeJs } from "react-icons/fa";
import { 
  SiMui, SiTypescript, SiPostgresql, SiKubernetes, 
  SiGooglecloud, SiJest, SiCypress 
} from "react-icons/si";

const skillsArr = [
  { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Material UI", icon: SiMui, color: "#007FFF" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Docker", icon: FaDocker, color: "#0db7ed" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
  { name: "Cypress", icon: SiCypress, color: "#4AB3E4" },
  { name: "GitHub", icon: FaGithub, color: "#333" },
];

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h2 className="title">Skills</h2>
      <div className="skill-holder">
        {skillsArr.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="skill-cards">
              <Icon className="skill-icon" style={{ color: skill.color }} />
              <p className="skill">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
