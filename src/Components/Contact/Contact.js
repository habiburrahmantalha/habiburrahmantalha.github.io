import { Row, Col } from "antd";
import {
  LinkedinFilled,
  GithubFilled,
  InstagramOutlined,
  MailFilled,
  PhoneFilled,
} from "@ant-design/icons";
import "./Contact.css";

export const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <Row>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={14} xl={14} lg={18} xs={20} md={18} sm={18}>
          <h2 className="section-label contact-label" data-aos="fade-up" data-aos-once>
            06. Get In Touch
          </h2>
          <p className="contact-text" data-aos="fade-up" data-aos-once>
            I'm currently open to new opportunities. Whether you have a question, a project idea,
            or just want to say hi — my inbox is always open.
          </p>
          <p className="contact-email" data-aos="fade-up" data-aos-once>
            <a href="mailto:habiburrahmantalha@gmail.com">habiburrahmantalha@gmail.com</a>
          </p>

          <div className="links-wrapper" data-aos="fade-up" data-aos-delay="200" data-aos-once>
            <a
              className="social-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/habiburrahmantalha/"
              aria-label="LinkedIn"
            >
              <LinkedinFilled />
            </a>
            <a
              className="social-link"
              target="_blank"
              rel="noreferrer"
              href="mailto:habiburrahmantalha@gmail.com"
              aria-label="Email"
            >
              <MailFilled />
            </a>
            <a
              className="social-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/habiburrahmantalha"
              aria-label="GitHub"
            >
              <GithubFilled />
            </a>
            <a
              className="social-link"
              target="_blank"
              rel="noreferrer"
              href="tel:+8801755529398"
              aria-label="Phone"
            >
              <PhoneFilled />
            </a>
            <a
              className="social-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/habiburrahmantalha/"
              aria-label="Instagram"
            >
              <InstagramOutlined />
            </a>
          </div>

          <p className="contact-footer" data-aos="fade-up" data-aos-once>
            Built by Md. Habibur Rahman · Dhaka, Bangladesh
          </p>
        </Col>
        <Col xxl={5} xl={5} lg={3} xs={2} md={3} sm={3} />
      </Row>
    </div>
  );
};
