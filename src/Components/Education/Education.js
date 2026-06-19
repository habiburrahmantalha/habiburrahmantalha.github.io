import { Row, Col } from "antd";
import { EducationContent, AchievementsContent } from "../../Content/Education";
import "./Education.css";

export const Education = () => {
  return (
    <div id="education" className="section">
      <Row>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={14} xl={14} lg={18} xs={20} md={18} sm={18}>
          <h2 className="section-label" data-aos="fade-up" data-aos-once>
            05. Education & Achievements
          </h2>

          <div className="education-card" data-aos="fade-up" data-aos-delay="100" data-aos-once>
            <div className="education-degree">{EducationContent.degree}</div>
            <div className="education-institution">{EducationContent.institution}</div>
            <div className="education-meta">
              <span>{EducationContent.location}</span>
              <span className="meta-dot">·</span>
              <span>{EducationContent.period}</span>
              <span className="meta-dot">·</span>
              <span>CGPA: {EducationContent.grade}</span>
            </div>
          </div>

          <div className="achievements-grid">
            {AchievementsContent.map((item, index) => (
              <div
                key={item.title}
                className="achievement-card"
                data-aos="fade-up"
                data-aos-delay={150 + index * 100}
                data-aos-once
              >
                <h3 className="achievement-title">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.title} ↗
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="achievement-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </Col>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};
