import React from "react";
import friends from "./project.json";

function Projects(props) {
  return (
    <><div className="card">
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
        <Projects
        name={friends[0].name}
        image={friends[0].image}
        occupation={friends[0].occupation}
        location={friends[0].location} />
        <Projects
        name={friends[1].name}
        image={friends[1].image}
        occupation={friends[1].occupation}
        location={friends[1].location} />
        <Projects
        name={friends[2].name}
        image={friends[2].image}
        occupation={friends[2].occupation}
        location={friends[2].location} /></>

  );
}

  

export default Projects;
