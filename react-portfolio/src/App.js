import React, {useState, Component} from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Title from "./components/Title";
import project from "./components/ProjectCard/project.json";
import Wrapper from "./components/Wrapper";
import {HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/ProjectCard/Projects";
import NavTabs from "./components/NavTabs";
import Contact from "./components/pages/Contact";
import ProjectCard from "./components/ProjectCard/Projects";

// const loader = async () => {
//   const data = work();
//   return json(data);
// };
class App extends Component {
  // const [project, setProject] = useState(work);
  // useState = {
  //   project
  // };
  

  render () {
    return (
      <Router>
        <NavTabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<><Projects />
          <Wrapper>
            <Title>Projects</Title>
            
            {project.map(project => <ProjectCard
            
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              description={project.description}
              link={project.url} />
            )}
          </Wrapper></>
            } />
          
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
      
   )}
};



export default App;
