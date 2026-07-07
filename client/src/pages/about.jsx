import "../App.css";
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

            <div className="project-image"></div>

            <h3>Portfolio Website</h3>

            <p>
              Personal portfolio made with React featuring responsive design,
              animations and modern UI.
            </p>

            <div className="project-buttons">
              <button>Live Demo</button>
              <button>GitHub</button>
            </div>

          </div>

          <div className="project-card">

            <div className="project-image"></div>

            <h3>real-time chat app</h3>

            <p>
              TempChat
            </p>

            <div className="project-buttons">
              <button>Live Demo</button>
              <button>GitHub</button>
            </div>

          </div>

          <div className="project-card">

            <div className="project-image"></div>

            <h3>Task Manager</h3>

            <p>
              Simple task manager built with React to organize daily work using
              reusable components.
            </p>

            <div className="project-buttons">
              <button>Live Demo</button>
              <button>GitHub</button>
            </div>

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="box contact">

        <h2>Contact Me</h2>

        <p>Email : your@email.com</p>

        <p>GitHub : github.com/yourprofile</p>

        <p>LinkedIn : linkedin.com/in/yourprofile</p>

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