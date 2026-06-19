import { Row, Col } from "antd";
import "./Projects.css";
import { ProjectContent } from "../../Content/Projects";

export const Projects = () => {
  return (
    <div id="projects" className="section">
      <Row>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={14} xl={14} lg={18} xs={20} md={18} sm={18}>
          <h2 className="section-label" data-aos="fade-up" data-aos-once>
            04. Featured Projects
          </h2>
          <p className="projects-intro" data-aos="fade-up" data-aos-once>
            A selection of projects I've built and maintained across healthcare, e-commerce,
            CRM, and more.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={14} xl={14} lg={18} xs={20} md={18} sm={18}>
          <div className="projects-grid">
            {ProjectContent.map((project, index) => (
              <ProjectItem key={project.company} project={project} index={index} />
            ))}
          </div>
        </Col>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};

const ProjectItem = ({ project, index }) => {
  return (
    <div
      className="project-card"
      data-aos="fade-up"
      data-aos-delay={index * 50}
      data-aos-once
    >
      <div className="project-card-header">
        <h3 className="project-title">{project.company}</h3>
        <span className="project-time">{project.time}</span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tech-tags">
        {project.tech.map((t) => (
          <span key={t} className="project-tech-tag">
            {t}
          </span>
        ))}
      </div>
      <div className="project-details">
        <div className="project-detail-block">
          <span className="detail-label">Role</span>
          <p className="detail-text">{project.role}</p>
        </div>
        {project.impact && (
          <div className="project-detail-block">
            <span className="detail-label">Impact</span>
            <p className="detail-text">{project.impact}</p>
          </div>
        )}
      </div>
    </div>
  );
};
