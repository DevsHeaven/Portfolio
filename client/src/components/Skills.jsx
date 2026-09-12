import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPython,
} from "react-icons/si";

const skills = [
  { name: "MongoDB", icon: SiMongodb, color: "#2FAE66" },
  { name: "Express.js", icon: SiExpress, color: "#E6EDF3" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#83CD29" },
  { name: "JavaScript", icon: SiJavascript, color: "#F5C518" },
  { name: "HTML5", icon: SiHtml5, color: "#E85D3D" },
  { name: "CSS3", icon: SiCss, color: "#4E9CF0" },
  { name: "Python", icon: SiPython, color: "#4B9FE0" },
];

const Skills = () => {
  return (
    <section id="skills" className="section section-alt">
      <div className="section-inner">
        <span className="section-tag">Skills</span>
        <h2 className="section-title">The stack I build with</h2>

        <div className="skills-grid">
          {skills.map(({ name, icon: Icon, color }) => (
            <div key={name} className="skill-card">
              <Icon className="skill-icon" style={{ color }} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
