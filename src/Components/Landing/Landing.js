import Me from "../../Content/me.jpg";
import "./Landing.css";

export const Landing = () => {
  return (
    <div id="landing" className="landing-section">
      <div className="landing-inner">
        <div className="landing-content">
          <p data-aos="fade" data-aos-delay="200" data-aos-once className="welcome-hi">
            Hi, I'm
          </p>
          <h1 data-aos="fade" data-aos-delay="400" data-aos-once className="name">
            Md. Habibur Rahman
          </h1>
          <p data-aos="fade" data-aos-delay="600" data-aos-once className="role-title">
            Senior Software Engineer
          </p>
          <p data-aos="fade" data-aos-delay="800" data-aos-once className="short-desc">
            I build things for <span className="accent-text">Mobile</span> and{" "}
            <span className="accent-text">Web</span>.
          </p>
          <p data-aos="fade" data-aos-delay="1000" data-aos-once className="long-desc">
            8+ years crafting high-quality mobile and web applications with Flutter, Android,
            ReactJS, and Laravel. Passionate about problem-solving, clean code, and delivering
            products that make a real impact.
          </p>

          <div data-aos="fade" data-aos-delay="1200" data-aos-once className="landing-stats">
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">12+</span>
              <span className="stat-label">Projects Shipped</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Companies</span>
            </div>
          </div>

          <div data-aos="fade" data-aos-delay="1400" data-aos-once className="landing-cta">
            <a href="#contact" className="cta-primary">
              Get in Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1RmfdQzGNen4ENbWwuw5slBDWuGGmfiM_/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="cta-secondary"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="landing-visual" data-aos="fade" data-aos-delay="600" data-aos-once>
          <div className="landing-image-wrapper">
            <div className="landing-image-border" />
            <img className="landing-profile-image" src={Me} alt="Md. Habibur Rahman" />
          </div>
          <div className="landing-tech-orbit">
            <span>Flutter</span>
            <span>Android</span>
            <span>React</span>
            <span>Laravel</span>
          </div>
        </div>
      </div>
    </div>
  );
};
