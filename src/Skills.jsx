import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Technical Skills</h2>

      <div className="skills-container">
        <ul className="skills-list">
          <li><span>React.js</span>, Redux / Context API</li>
          <li>HTML5, CSS3, <span>JavaScript (ES6+)</span></li>
          <li>Bootstrap, <span>Tailwind CSS</span></li>
          <li><span>Node.js</span>, Express.js (Basic)</li>
          <li>MongoDB, Mongoose</li>
          <li>RESTful APIs, Axios, Fetch API</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;