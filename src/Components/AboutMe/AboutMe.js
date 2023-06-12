import { Row, Col } from "antd";
import "./AboutMe.css";
import Me from "../../Content/me.jpg";
export const AboutMe = () => {
  return (
    <div id="aboutme" style={{ paddingTop: 10 }}>
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
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-heading"
          >
            <b>About Me</b>
          </h1>
          <br />
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-first"
          >
            I am an experienced Software Engineer with over 6 years of industry experience and a strong passion for
            problem-solving and developing innovative and optimized programs.
            <br />
            <br />
            I’m Committed to delivering high-quality solutions that meet client requirements and enhance user experiences.
            I have a solid understanding of software development lifecycle, and agile methodologies, and a track record
            of successfully delivering projects on time.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-second"
          >
            Throughout my career, I have had the opportunity to work on a variety of projects,
            ranging from e-commerce, food delivery, entertainment, CRM, VoIP calling and educational applications.

          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="about-third"
          >
            As a collaborative team player, I thrive in environments that foster creativity and encourage knowledge sharing.
            I enjoy working closely with cross-functional teams, engaging in brainstorming sessions,
            and finding optimal solutions to complex problems.
          </p>
        </Col>
        <Col xxl={1} xl={1} lg={7} xs={2} />
        <Col
          data-aos="fade"
          data-aos-delay="500"
          data-aos-once
          xxl={9}
          xl={9}
          lg={9}
          style={{ display: "flex", alignItems: "center" }}
        >
          <section className="main">
            <div className="container">
              <div className="img-container">
                <img className="image" src={Me} alt="MyFace" />
              </div>
            </div>
          </section>
        </Col>
        <Col lg={3} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};
