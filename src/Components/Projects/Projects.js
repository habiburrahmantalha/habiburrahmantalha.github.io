import {Row, Col, Card, Divider} from "antd";
import "./Projects.css";
import {ProjectContent} from "../../Content/Projects";
export const Projects = () => {
  
  return (
    <div id="projects" style={{ paddingTop: 10 }}>
      <Row style={{ marginTop: "20vh" }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
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
            className="projects-heading"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-once
            style={{
              borderBottom: "2px solid rgb(168, 164, 164)",
              margin: "5%",
            }}
          >
            <b>Projects</b>
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "13px" }}>
        <Col xxl={3} xl={3} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
            <ProjectItem company={ProjectContent[0].company} brief={ProjectContent[0].brief} time={ProjectContent[0].time}/>
        </Col>
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
            <ProjectItem company={ProjectContent[1].company} brief={ProjectContent[1].brief} time={ProjectContent[1].time}/>
        </Col>
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
            <ProjectItem company={ProjectContent[2].company} brief={ProjectContent[2].brief} time={ProjectContent[2].time}/>
        </Col>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
      </Row>
      <Row style={{ marginTop: "13px" }}>
          <Col xxl={3} xl={3} lg={4} xs={2} md={3} sm={3} />
          <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
            <ProjectItem company={ProjectContent[3].company} brief={ProjectContent[3].brief} time={ProjectContent[3].time}/>
        </Col>
          <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
          <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} />
          <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
            <ProjectItem company={ProjectContent[4].company} brief={ProjectContent[4].brief} time={ProjectContent[4].time}/>
        </Col>
          <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
          <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} />
          <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
          <ProjectItem company={ProjectContent[5].company} brief={ProjectContent[5].brief} time={ProjectContent[5].time}/>
      </Col>
          <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};

const ProjectItem = ({company, time, brief, link}) => {
    return  <Card
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-once
        className="remote-code-card"
        style={{ margin: "3%", height: "95%" }}
        bordered={true}
        hoverable={false}
        title={company}
        extra={
            <a

                //href="https://github.com/rajatmaheshwari2512/remote-code-exec/"
                target="_blank"
                rel="noreferrer"
            >
                Link
            </a>
        }
    >
        <p
            className="rce-description"
            style={{
                textAlign: "left",
                color: "rgb(168, 164, 164)",

            }}
        >
            {brief[0]}
            <Divider orientation="left">Tech</Divider>
            {brief[1]}
            <Divider orientation="left">Role</Divider>
            {brief[2]}
            <Divider orientation="left">Impact</Divider>
            {brief[3]}
        </p>

    </Card>
}
