import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="portfolio-container">
      <header className="header-section">
        <h1>Ariel Cedillo</h1>
        <p className="subtitle">Full Stack Developer & IT Specialist</p>
      </header>

      <Carousel />

      <section className="stack-section">
        <h2>Technical Skills & Proficiency</h2>
        <div className="stack-grid">
          <div className="stack-category">
            <h3>Languages & Core Development</h3>
            <p>TypeScript/JavaScript, Dart, Node.js, Flutter</p>
          </div>
          <div className="stack-category">
            <h3>Frontend Frameworks</h3>
            <p>React, Angular, Astro</p>
          </div>
          <div className="stack-category">
            <h3>Database Management</h3>
            <p>SQL (Relational), NoSQL (Document-based)</p>
          </div>
          <div className="stack-category">
            <h3>DevOps & Infrastructure</h3>
            <p>Docker, Nginx, Reverse Proxies</p>
          </div>
          <div className="stack-category">
            <h3>Cloud & Deployment</h3>
            <p>Firebase, Vercel</p>
          </div>
          <div className="stack-category">
            <h3>Real-time & Version Control</h3>
            <p>WebSockets, Git, GitHub, CI/CD</p>
          </div>
        </div>
      </section>

      <section className="links-section">
        <h2>Contact</h2>
        <div className="social-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
