import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import About from "./About";

const Contact = () => (
  <div>
    <h1>Contact Page</h1>
    <p>
      Want to get in touch?
      Feel free to contact me on any of the links below:
    </p>
    <Link to="https://github.com/RyzaT" role="button" className="btn btn-link">
        GitHub
      </Link>
      <Link to="https://www.linkedin.com/in/ryan-taylor-7715b775/" role="button" className="btn btn-link">
        LinkedIn
      </Link>
      <Routes>
        <Route path="about" element={<About />} role="button" className="btn btn-link">About Me</Route>
        About Me
      </Routes>
  </div>
)

export default Contact;
