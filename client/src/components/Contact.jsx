import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <section id="contact" className="section section-alt">
      <div className="section-inner contact-inner">
        <span className="section-tag">Contact</span>
        <h2 className="section-title">Let's build something together</h2>
        <p className="contact-desc">
          Have a project in mind, or just want to talk stacks? My inbox is open.
        </p>

        <div className="contact-cards">
          <a href="mailto:manishyadav22377@gmail.com" className="contact-card">
            <HiOutlineMail className="contact-icon" />
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-value">manishyadav22377@gmail.com</div>
            </div>
          </a>

          <a
            href="https://github.com/DevsHeaven"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaGithub className="contact-icon" />
            <div>
              <div className="contact-label">GitHub</div>
              <div className="contact-value">github.com/DevsHeaven</div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/developer-manish-yadav"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaLinkedin className="contact-icon" />
            <div>
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value">developer-manish-yadav</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
