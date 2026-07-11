import "../App.css";
import portfolio from "../assets/portfolio.png";
import chatingapp from "../assets/chating-app.png";
import taskmanager from "../assets/task-manager.png";

import Char1 from "../assets/Char1.png";

export default function About() {
  return (
    <div className="main">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-text">
          <h1 className="animated-gradient">
            Hi, I'm <span>Manish Yadav</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p>
            I build modern, responsive and interactive websites using React,
            JavaScript and CSS. Currently learning backend development with
            Express.js and MongoDB to become a Full Stack Developer.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              View Projects
            </button>

            <button className="secondary-btn">
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={Char1} alt="Manish" />
        </div>

      </section>

      {/* About */}

      <section className="box about">

        <h2>About Me</h2>

        <p>
          Hi, I'm <strong>Manish Yadav</strong>, a passionate BCA student who
          enjoys creating beautiful and responsive web applications. I have
          experience with HTML, CSS, JavaScript, and React. I am currently
          expanding my skills by learning Express.js and MongoDB to become a
          Full Stack Developer.
        </p>

      </section>

      {/* Skills */}

      <section className="box">

        <h2>Skills</h2>

        <div className="skills">

          <span className="skill">HTML5</span>
          <span className="skill">CSS3</span>
          <span className="skill">JavaScript</span>
          <span className="skill">React</span>
          <span className="skill">Express.js</span>
          <span className="skill">MongoDB</span>
          <span className="skill">Git</span>
          <span className="skill">GitHub</span>

        </div>

      </section>

      {/* Projects */}

      <section>

        <h2 className="section-title">
          My Projects
        </h2>

        <div className="projects">

          <div className="project-card">

            <div className="project-image"><img src={portfolio}/></div>

            <h3>Portfolio Website</h3>

            <p>
              Personal portfolio made with React featuring responsive design,
              animations and modern UI.
            </p>

            <div className="project-buttons">
              <button onClick={() => window.location.href = "https://github.com/DevsHeaven/Portfolio"}>Live Demo</button>
              <button onClick={() => window.location.href = "https://devsheaven.github.io/Portfolio/"}>GitHub</button>
            </div>

          </div>

          <div className="project-card">

            <div className="project-image"><img src={chatingapp}/></div>

            <h3>Chatting App</h3>

            <p>
              Simple chatting app using MERN stack which delete messages after 72 hour .
            </p>

            <div className="project-buttons">
              <button onClick={() => window.location.href = "https://chating-app-coral.vercel.app"}>Live Demo</button>
              <button onClick={() => window.location.href = "https://github.com/DevsHeaven/ChatingApp"}>GitHub</button>
            </div>

          </div>

          <div className="project-card">

            <div className="project-image"><img src={taskmanager}/></div>

            <h3>Task Manager</h3>

            <p>
              Simple task manager built with React to organize daily work using
              reusable components.
            </p>

            <div className="project-buttons">
              <button onClick={() => window.location.href = "https://task-manager-opal-kappa.vercel.app/"}>Live Demo</button>
              <button onClick={() => window.location.href = "https://github.com/DevsHeaven/TaskManager"}>GitHub</button>
            </div>

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="box contact">

        <h2>Contact Me</h2>

        <p>Email : manishyadav22377@gmail.com</p>

        <p onClick={() => window.location.href = "https://github.com/DevsHeaven"}>GitHub : https://github.com/DevsHeaven</p>

        <p onClick={() => window.location.href = "https://www.linkedin.com/in/manish-yadav-775bb3325?utm_source=share_via&utm_content=profile&utm_medium=member_android"}>LinkedIn : Manish Yadav</p>

      </section>

      {/* Footer */}

      <footer>

        <p>
          © 2026 Manish Yadav | Built with React ❤️
        </p>

      </footer>

    </div>
  );
}