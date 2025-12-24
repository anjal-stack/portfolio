import "./App.css";
import ImageImg from "./Image.png";
import { Link } from 'react-router-dom';

function App() {
    return (
        <div>
            {/* Fixed Navbar */}
            <nav className="navbar">
                <div className="nav-container">
                    <Link to="#home" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/skills" className="nav-link">Skills</Link>
                    <Link to="/projects" className="nav-link">Project & Experience</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    
                </div>
            </nav>

            <div className="main-content">
                <div className="image-section">
                    <img src={ImageImg} alt="Anjali" />
                </div>
                <div className="text-section">
                    <h1>Hi, I'm Anjali</h1>
                    <p className="intro-text">
                        I am a motivated fresher seeking a Frontend Developer role
                        where I can apply my React.js and MERN Stack knowledge, learn
                        from experienced professionals, and contribute effectively to
                        building user-friendly web applications.
                    </p>
                </div>
            </div>
            <footer className="footer">
                <p>© 2025 Anjali. All rights reserved.</p>

                <div className="footer-links">
                    <a
                        href="https://www.linkedin.com/in/your-linkedin-username"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a href="mailto:anjaliii@gmail.com">
                        Email
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default App;