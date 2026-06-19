import AOS from "aos";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Landing } from "./Components/Landing/Landing";
import { AboutMe } from "./Components/AboutMe/AboutMe";
import { TechIKnow } from "./Components/TechIKnow/TechIKnow";
import { Experience } from "./Components/Experience/Experience";
import { Projects } from "./Components/Projects/Projects";
import { Education } from "./Components/Education/Education";
import { Contact } from "./Components/Contact/Contact";
import { ConfigProvider, Layout, theme } from "antd";
import "aos/dist/aos.css";
import { useEffect } from "react";

const { Header, Content } = Layout;

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80 });
    AOS.refresh();
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgBase: "#000000",
          colorBgContainer: "#141414",
          colorBgElevated: "#141414",
          colorBgLayout: "#000000",
          colorText: "#f5f5f5",
          colorTextSecondary: "#b0b0b0",
          colorBorder: "rgba(255, 255, 255, 0.14)",
          colorPrimary: "#64ffda",
        },
      }}
    >
      <div className="App">
        <Layout>
          <Header className="app-header">
            <Navbar />
          </Header>
          <Content className="app-content">
            <Landing />
            <AboutMe />
            <TechIKnow />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </Content>
        </Layout>
      </div>
    </ConfigProvider>
  );
}

export default App;
