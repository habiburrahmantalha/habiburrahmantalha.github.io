import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <div id="aboutme" className="section">
      <div className="page-container">
        <h2 className="section-label" data-aos="fade-up" data-aos-once>
          01. About Me
        </h2>
        <p data-aos="fade-up" data-aos-once className="about-first">
          I'm an experienced Software Engineer with over <strong>8 years</strong> of industry
          experience and a strong passion for problem-solving and developing optimized programs.
          Skilled in native Android and cross-platform (Flutter) mobile development, along with
          backend (Laravel) and frontend (ReactJS) web applications.
        </p>
        <p data-aos="fade-up" data-aos-once className="about-second">
          Throughout my career, I've worked on diverse projects spanning e-commerce, healthcare,
          CRM, food delivery, fantasy sports, VoIP telephony, and workplace safety — for clients
          including Unilever, Zuellig Pharma, and startups across Bangladesh, Singapore, and Europe.
        </p>
        <p data-aos="fade-up" data-aos-once className="about-third">
          I thrive in agile environments, collaborating with cross-functional teams to deliver
          high-quality solutions on time. Based in <strong>Dhaka, Bangladesh</strong>, working
          remotely with teams worldwide.
        </p>
        <div data-aos="fade-up" data-aos-once className="about-highlights">
          <span className="highlight-tag">Flutter</span>
          <span className="highlight-tag">Android</span>
          <span className="highlight-tag">ReactJS</span>
          <span className="highlight-tag">Laravel</span>
          <span className="highlight-tag">Agile / Scrum</span>
        </div>
      </div>
    </div>
  );
};
