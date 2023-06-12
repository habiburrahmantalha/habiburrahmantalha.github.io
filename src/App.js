import logo from './logo.svg';
import AOS from "aos";

import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Landing} from "./Components/Landing/Landing";
import {AboutMe} from "./Components/AboutMe/AboutMe";
import {TechIKnow} from "./Components/TechIKnow/TechIKnow";
import {Experience} from "./Components/Experience/Experience";
import {Projects} from "./Components/Projects/Projects";
import {Contact} from "./Components/Contact/Contact";
import { Layout, Space } from 'antd';
import "aos/dist/aos.css";
import "./App.less";
import {useEffect} from "react";
const { Header, Footer, Sider, Content } = Layout;
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
      <div className="App">
          <Layout>
              <Header style={{
                  position: 'sticky',
                  top: 0,
                  zIndex: 1,
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
              }}>
                  <Navbar />
              </Header>
              <Content>
                  <div>
                      <Landing />
                      <AboutMe />
                      <TechIKnow />
                      <Experience />
                      <Projects />
                      <Contact />
                  </div>
              </Content>
          </Layout>



      </div>
  );
}

export default App;
