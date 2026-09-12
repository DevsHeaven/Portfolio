const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-inner about-grid">
        <div>
          <span className="section-tag">About me</span>
          <h2 className="section-title">Turning ideas into working products</h2>
        </div>
        <div className="about-text">
          <p>
            I'm a full-stack developer focused on the MERN stack — React on the
            frontend, Node.js and Express on the backend, and MongoDB for
            storage. I care about clean architecture, secure auth, and interfaces
            that feel simple even when the logic behind them isn't.
          </p>
          <p>
            Outside the MERN stack, I use Python for scripting and automation,
            and I'm comfortable working across the whole stack — from database
            schema design to the pixel-level details of the UI.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Full-stack projects shipped</span>
            </div>
            <div className="stat">
              <span className="stat-number">MERN</span>
              <span className="stat-label">Primary stack</span>
            </div>
            <div className="stat">
              <span className="stat-number">JWT</span>
              <span className="stat-label">Auth done right</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
