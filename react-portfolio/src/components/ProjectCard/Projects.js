import React, {require, Component} from "react";
import "./style.css";
import "./project.json";
import { render } from "react-dom";
import Wrapper from "../Wrapper";
import work from "./project.json";
import Title from "../Title";
import project from "./project.json";

// import {BrowserRouter as Link} from "react-router-dom";
// import Projects from "./components/ProjectCard/Projects";

function ProjectCard(props) {
  // const [project, setProject] = useState(work);
 
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong>
          </li>
          <li>
            <strong>{props.description}</strong>
          </li>
          <li>
           <a href={props.link} role="button" className="btn btn-link">See Project</a>
          </li>
        </ul>
      </div>
    </div>
  )}
 

    




export default ProjectCard;
