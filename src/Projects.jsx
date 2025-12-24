import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>

        <p className="projects-description">
          As a <strong>fresher</strong>, I have developed projects where I worked on both{" "}
          <strong>frontend</strong> and <strong>backend</strong> development. These projects helped
          me gain practical experience in building complete web applications.
        </p>

        <p className="projects-description">
          To explore my work, click the button below. I have shared my{" "}
          <strong>GitHub repository</strong>, where all my projects are uploaded with proper code
          structure and documentation.
        </p>

        <a
          href="https://github.com/anjal-stack"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-btn"
        >
          View Projects on GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;