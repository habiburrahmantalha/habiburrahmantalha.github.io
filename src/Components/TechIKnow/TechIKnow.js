import { Row, Col } from "antd";
import "./TechIKnow.css";
export const TechIKnow = () => {
  return (
    <div id="techiknow" style={{ paddingTop: 10 }}>
      <Row style={{ marginTop: "35vh" }}>
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
            className="techiknow-heading"
          >
            <b>Tech I Know</b>
          </h1>
          <br />
          <div data-aos="fade-up" data-aos-delay="100" data-aos-once>
            <p className="techiknow-first">
              I am passionate about staying updated with the latest industry trends and technologies.
              Whether it's exploring new frameworks or attending conferences and webinars,
              I am always eager to expand my knowledge and improve my skills.
            </p>
            <p className="techiknow-second">
              I’m adaptable and eager to stay updated with the latest technologies and industry trends.
            </p>
          </div>
        </Col>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        <Col
          xxl={9}
          xl={9}
          lg={18}
          xs={20}
          md={18}
          sm={18}
          style={{ textAlign: "left", marginTop: "1%" }}
        >
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="frameworks-wrapper"
          >
            <h2
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(168, 164, 164)",
              }}
              className="frameworks-heading"
            >
              <b>Frameworks/Libraries</b>
            </h2>
            <p style={{ color: "rgb(168, 164, 164)" }} className="frameworks">
              Android, Flutter, ReactJS, Laravel
            </p>
          </div>
{/*          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="devops-wrapper"
          >
            <h2
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(168, 164, 164)",
              }}
              className="devops-heading"
            >
              <b>DevOps</b>
            </h2>
            <p style={{ color: "rgb(168, 164, 164)" }} className="devops">
              Docker AWS GCP Git Netlify Kubernetes
            </p>
          </div>*/}
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="database-wrapper"
          >
            <h2
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(168, 164, 164)",
              }}
              className="database-heading"
            >
              <b>Databases</b>
            </h2>
            <p style={{ color: "rgb(168, 164, 164)" }} className="database">
              MySQL, GraphQL, Firebase Realtime Database, Room
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            className="languages-wrapper"
          >
            <h2
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(168, 164, 164)",
              }}
              className="languages-heading"
            >
              <b>Languages</b>
            </h2>
            <p style={{ color: "rgb(168, 164, 164)" }} className="languages">
              Dart, Java, Kotlin, JavaScript, PHP
            </p>
          </div>
        </Col>
        <Col xs={2} />
      </Row>
    </div>
  );
};
