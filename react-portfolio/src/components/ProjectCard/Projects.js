import React, {useState, Component} from "react";
import "./style.css";
import "./project.json";
import { render } from "react-dom";
import Wrapper from "../Wrapper";
import work from "./project.json";
import Title from "../Title";
import project from "./project.json";
import image from "./project.json";


import {Link} from "react-router-dom";
// import Projects from "./components/ProjectCard/Projects";

function ProjectCard(props) {
//   const [project, setProjectState] = useState({
//   [
//     {
//       id: 1,
//       key: 1,
//       name: "JavaScript Coding Quiz",
//       image: "/conponents/images/js-coding-quiz-screen.png",
//       description: "A Timed Quiz Themed Around JavaScript",
//       link: "https://github.com/RyzaT/Coding-Quiz-JScript"
//     },
//     {
//       id: 2,
//       key: 2,
//       name: "Work Day Scheduler",
//       image: "react-portfolio/src/components/images/Daily Planner screenshot.png",
//       description: "Daily Planner Application build around JavaScript, HTML and CSS",
//       link: "https://github.com/RyzaT/Daily-Planner-App"
//     },
//     {
//       id: 3,
//       key: 3,
//       name: "Team Profile Generator",
//       image: "react-portfolio/src/components/images/team-profile-gen-screen.png",
//       description: "Team Profile Generator made with test driven develpomen",
//       link: "https://github.com/RyzaT/Team-Profile-Generator-TDD"
//     },
//     {
//       id: 4,
//       key: 4,
//       name: "University Explorer Guide",
//       image: "react-portfolio/src/components/images/uni-explorer-screen.png",
//       description: "A University Guide Using API's",
//       link: "https://github.com/RyzaT/University-Explorer-Project"
//     },
//     {
//       id: 5,
//       key: 5,
//       name: "Weather Dashboard",
//       image: "react-portfolio/src/components/images/weather dash screen.png",
//       description: "Weather Dashboard built around JavaScript, HTML and CSS",
//       link: "https://github.com/RyzaT/Weather-Dashboard-RyzaT"
//     },
//     {
//       id: 6,
//       key: 6,
//       name: "Readme Generator",
//       imag: "react-portfolio/src/components/images/Readme-Gen-Screen.png",
//       description: "A Readme Generator built through Node",
//       link: "https://github.com/RyzaT/Node-ReadMe-Generator"
//     }
//   ] 
// });
 
  return (
  
    <div className="card">
      <div className="img-container">
        <img src={props.image} width="60" alt={props.name} />
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
            <Link to={props.link} >Check the Repo</Link>
           <a href={props.link} role="button" className="btn btn-link">See Project </a>
          </li>
        </ul>
      </div>
    </div>
  )}
 

    




export default ProjectCard;
