import React, { useState } from "react";
import "./style.css";
import './project.json';
// import { render } from "react-dom";
import Wrapper from "../Wrapper";
import work from "./project.json";
import Title from "../Title";
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Projects from "./components/ProjectCard/Projects";

function ProjectCard(props) {
  const [project, setProject] = useState(work);
 
  return (
    <div className="card">
      <div className="img-container">
        <img alt={project.name} src={project.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {project.name}
          </li>
          <li>
            <strong>Occupation:</strong> {project.occupation}
          </li>
          <li>
            <strong>Location:</strong> {project.location}
          </li>
        </ul>
      </div>
    </div>
  )}
 

    




export default ProjectCard;
