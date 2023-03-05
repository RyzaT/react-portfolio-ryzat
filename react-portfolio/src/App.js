import React from "react";
// import PortfolioContainer from "./components/PortfolioContainer";
// import Title from "./components/Title";
// import friends from "./components/ProjectCard/project.json";
// import Wrapper from "./components/Wrapper";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/ProjectCard/Projects";
import NavTabs from "./components/NavTabs";
import Contact from "./components/pages/Contact";


function App () {
  return (
    <Router>
      <div>
        <NavTabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
