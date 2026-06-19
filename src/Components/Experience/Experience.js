import { Row, Col } from "antd";
import { ExperienceContent } from "../../Content/Experience";
import { IndividualExperience } from "../IndividualExperience/IndividualExperience";
import "./Experience.css";

export const Experience = () => {
  return (
    <div id="experience" className="section">
      <Row>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={14} xl={14} lg={18} xs={20} md={18} sm={18} style={{ textAlign: "left" }}>
          <h2 className="section-label" data-aos="fade-up" data-aos-once>
            03. Work Experience
          </h2>
          <p className="experience-intro" data-aos="fade-up" data-aos-once>
            A decade-long journey building mobile and web products for companies across
            Bangladesh, Singapore, France, and beyond.
          </p>
        </Col>
      </Row>

      <div className="experience-timeline">
        {ExperienceContent.map((experience, index) => (
          <IndividualExperience
            key={`${experience.company}-${experience.time}`}
            index={index}
            company={experience.company}
            link={experience.link}
            role={experience.role}
            time={experience.time}
            location={experience.location}
            brief={experience.brief}
          />
        ))}
      </div>
    </div>
  );
};
