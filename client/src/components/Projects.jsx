import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import portfolioImg from "../assets/portfolio.png";
import chattingAppImg from "../assets/chating-app.png";
import taskManagerImg from "../assets/task-manager.png";

const projects = [
  {
    title: "TempChat",
    description:
      "A real-time 1-to-1 chat app with friend requests and JWT auth, built with React, Node/Express, Socket.io, and MongoDB. Messages and friendships auto-expire after 72 hours via MongoDB TTL indexes.",
    image: chattingAppImg,
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/DevsHeaven",
    live: "",
  },
  {
    title: "Tasklet — Task Manager",
    description:
      "A full-stack task manager with secure JWT auth, per-user task isolation, search/filter/sort, priorities, due dates, and a live stats dashboard.",
    image: taskManagerImg,
    tags: ["React", "Express", "MongoDB", "JWT"],
    github: "https://github.com/DevsHeaven",
    live: "",
  },
  {
    title: "This Portfolio",
    description:
      "The site you're looking at right now — a React + Vite portfolio built to showcase my projects and skills, styled from scratch without a template.",
    image: portfolioImg,
    tags: ["React", "Vite", "CSS"],
    github: "https://github.com/DevsHeaven",
    live: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <span className="section-tag">Projects</span>
        <h2 className="section-title">Things I've built</h2>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card">
              <div className="project-image-wrap">
                <img src={p.image} alt={p.title} className="project-image" />
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                    <FaGithub /> Code
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
