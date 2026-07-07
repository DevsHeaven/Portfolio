import { Link } from "react-router-dom";
import Char1 from "../assets/Char1.png";

export default function Home() {
  return (
    <div className="main">

      <section className="hero">

        <div className="hero-text">

          <p style={{color:"var(--accent)",fontWeight:"600"}}>
            Welcome to my portfolio 👋
          </p>

          <h1 className="animated-gradient">
            Building Modern <br />
            Web Experiences
          </h1>

          <p>
            Passionate about creating fast, responsive and user-friendly web
            applications with modern technologies.
          </p>

          <div className="hero-buttons">
            <Link to="/projects">
              <button className="primary-btn">
                Explore Projects
              </button>
            </Link>

            <Link to="/about">
              <button className="secondary-btn">
                About Me
              </button>
            </Link>
          </div>

        </div>

        <div className="hero-image">
          <img src={Char1} alt="Developer" />
        </div>

      </section>

      <section className="box">

        <h2 className="section-title">What You'll Find Here</h2>

        <div className="home-grid">

          <div className="home-card">
            <h3>👨‍💻 About Me</h3>
            <p>Know my journey, education and technical skills.</p>
          </div>

          <div className="home-card">
            <h3>🚀 Projects</h3>
            <p>Explore web applications built using React and JavaScript.</p>
          </div>

          <div className="home-card">
            <h3>📜 Certificates</h3>
            <p>View my certifications and achievements.</p>
          </div>

          <div className="home-card">
            <h3>📞 Contact</h3>
            <p>Let's connect and build something amazing together.</p>
          </div>

        </div>

      </section>

      <section className="box">

        <h2 style={{textAlign:"center"}}>My Philosophy</h2>

        <p
          style={{
            textAlign:"center",
            maxWidth:"700px",
            margin:"20px auto",
            color:"var(--secondary)"
          }}
        >
          I believe great software isn't just about writing code—it's about
          creating experiences that are intuitive, accessible, and enjoyable
          for everyone.
        </p>

      </section>

    </div>
  );
}