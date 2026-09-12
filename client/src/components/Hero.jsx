import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import charImg from "../assets/Char1.png";

const Hero = () => {
  return (
    <section id="top" className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-inner">
        <div className="hero-text">
          <span className="eyebrow">👋 Hi, I'm</span>
          <h1>
            Manish Yadav
          </h1>
          <h2 className="hero-role">MERN Stack Developer</h2>
          <p className="hero-desc">
            I build full-stack web apps end to end — from React interfaces to
            Node/Express APIs backed by MongoDB, with Python on the side for
            scripting and data work.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/DevsHeaven" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/developer-manish-yadav"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:manishyadav22377@gmail.com" aria-label="Email">
              <HiOutlineMail />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-blob" />
          <img src={charImg} alt="Manish Yadav" className="hero-portrait" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
