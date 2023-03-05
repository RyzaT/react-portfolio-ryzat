import React from "react";
import "./style.css";
import './project.json';
// import Wrapper from "../Wrapper";
// import Props from "./project.json";
// import Title from "../Title";

function Projects(props) {
  return (
  
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
   
  );
}  

  

export default Projects;
