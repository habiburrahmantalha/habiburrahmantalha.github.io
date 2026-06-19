import { Row, Col } from "antd";
import "./TechIKnow.css";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Dart", "Java", "Kotlin", "JavaScript", "PHP"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Flutter", "React Native", "Android", "ReactJS", "Next.js", "Laravel", "NestJS"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQLite", "Firebase", "GraphQL", "Room"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "CI/CD", "Firebase", "Jira", "Scrum", "Agile", "Design Patterns"],
  },
];

export const TechIKnow = () => {
  return (
    <div id="techiknow" className="section">
      <Row>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={14} xl={14} lg={18} xs={20} md={18} sm={18} style={{ textAlign: "left" }}>
          <h2 className="section-label" data-aos="fade-up" data-aos-once>
            02. Skills & Technologies
          </h2>
          <p data-aos="fade-up" data-aos-once className="techiknow-intro">
            I stay current with industry trends and enjoy exploring new frameworks.
            Here's a snapshot of the technologies I work with daily.
          </p>

          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="skill-category"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once
              >
                <h3 className="skill-category-title">{category.title}</h3>
                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Col>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};
