import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>

        <p className="contact-description">
          I am actively looking for <strong>Frontend Developer</strong> or{" "}
          <strong>Specializing in React.js</strong> opportunities. Feel free to reach out for
          job opportunities, internships, or collaborations.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <span>📧</span>
            <a href="mailto:anjalibhardwaj450@email.com">anjalibhardwaj450@email.com</a>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <p>+91 7590811014</p>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <p>Mohali, Punjab</p>
          </div>
        </div>

        <div className="contact-buttons">
          <a
            href="https://github.com/anjal-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anjali-bhardwaj-520a512a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;