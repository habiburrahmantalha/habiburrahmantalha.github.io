import { Row, Col } from "antd";

export const IndividualExperience = ({
  index,
  company,
  link,
  role,
  brief,
  time,
  location,
}) => {
  return (
    <div className="experience-item" data-aos="fade-up" data-aos-delay={index * 50} data-aos-once>
      <Row>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={14} xl={14} lg={18} xs={20} md={18} sm={18}>
          <div className="exp-card">
            <div className="exp-header">
              <div className="exp-header-left">
                <h3 className="exp-company">
                  {link ? (
                    <a href={link} target="_blank" rel="noreferrer">
                      {company} ↗
                    </a>
                  ) : (
                    company
                  )}
                </h3>
                <p className="exp-role">{role}</p>
              </div>
              <div className="exp-header-right">
                <span className="exp-time">{time}</span>
                <span className="exp-location">{location}</span>
              </div>
            </div>
            <ul className="exp-brief">
              {brief.map((listItem, i) => (
                <li key={`${index}-${i}`}>{listItem}</li>
              ))}
            </ul>
          </div>
        </Col>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};
