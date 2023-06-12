import Layout, { Header } from "antd/lib/layout/layout";
import { Col, Menu, Row } from "antd";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <Layout>
      <Header>
        <Row style={{ height: "100%", marginTop: "1%" }}>

          <Col span={24}>

            <Menu
              mode="horizontal"
              theme="light"
              style={{
                width: "100%",
                backgroundColor: "#1f1f1f",
                border: "none",
              }}
              className="nav"
            >
              <Menu.Item className="link" key="home" style={{}}>
                <a
                  style={{ color: "white" }}
                  href="#aboutme"
                >
                  About
                </a>
              </Menu.Item>
              <Menu.Item
                className="link"
                key="techiknow"
                style={{}}
              >
                <a
                  style={{ color: "white" }}
                  href="#techiknow"
                >
                  Tech
                </a>
              </Menu.Item>
              <Menu.Item
                className="link"
                key="experience"
                style={{}}
              >
                <a
                  style={{ color: "white" }}
                  
                  href="#experience"
                >
                  Experience
                </a>
              </Menu.Item>
              <Menu.Item
                className="link"
                key="projects"
                style={{}}
              >
                <a
                  style={{ color: "white" }}
                  
                  href="#projects"
                >
                  Projects
                </a>
              </Menu.Item>
              <Menu.Item className="link" key="contact" style={{}}>
                <a
                  style={{ color: "white" }}
                  
                  href="#contact"
                >
                  Contact Me
                </a>
              </Menu.Item>
              <Menu.Item  className="link" key="resume" style={{}}>
                <a
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1RmfdQzGNen4ENbWwuw5slBDWuGGmfiM_/view?usp=sharing"
                >
                  Resume
                </a>
              </Menu.Item>
            </Menu>
          </Col>

        </Row>
      </Header>
    </Layout>
  );
};
