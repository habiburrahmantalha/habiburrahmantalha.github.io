import {Row, Col, Steps} from "antd";

import { ExperienceContent } from "../../Content/Experience";

import { IndividualExperience } from "../IndividualExperience/IndividualExperience";

import "./Experience.css";
export const Experience = () => {
  return (
    <div id="experience" style={{ paddingTop: 10 }}>
      <Row style={{ marginTop: "20vh" }}>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={6}
          xl={6}
          lg={18}
          xs={20}
          md={18}
          sm={18}
          style={{ textAlign: "left" }}
        >
          <h1
            className="experience-heading"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{ borderBottom: "2px solid rgb(168, 164, 164)" }}
          >
            <b>Experience</b>
          </h1>
        </Col>
      </Row>
        {    ExperienceContent.map((experience, index) => {
            return (
                <IndividualExperience
                    key={`${index}-experience`}
                    marginTop={index === 0 ? "13px" : "50px"}
                    company={experience.company}
                    link={experience.link}
                    role={experience.role}
                    time={experience.time}
                    location={experience.location}
                    brief={experience.brief}
                    report={experience.report ? experience.report : null}
                    youtubeLink={experience.youtubeLink ? experience.youtubeLink : null}
                />
            );
        })}

    </div>
  );
};
