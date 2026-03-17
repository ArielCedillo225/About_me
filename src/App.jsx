import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [activeArtifact, setActiveArtifact] = useState(null);

  const playRandomSound = () => {
    const sounds = ["Odin_1.mp3", "Odin_2.mp3", "Odin_3.mp3"];
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const audio = new Audio(sounds[randomIndex]);
    audio.play();
  };

  const strikeForge = (index) => {
    const audio = new Audio("Hammer.mp3");
    audio.play();
    setActiveArtifact(index);
    setTimeout(() => {
      setActiveArtifact(null);
    }, 100);
  };

  const handleCounterClick = () => {
    setCount((c) => c + 1);
    playRandomSound();
  };

  const artifacts = ["GAD Cuenca", "GMOV", "ICP", "FabLab"];

  return (
    <div className="nordic-container">
      <div
        className="background-overlay"
        style={{ backgroundImage: "url('Background.png')" }}
      ></div>

      <section id="center">
        <div className="hero-text">
          <h1>Skål!</h1>
          <p>
            From the depths of Hel to the even deeper depths of GitHub,{" "}
            <strong> Fluki </strong> rises{" "}
            <span
              style={{
                fontSize: "10px",
                verticalAlign: "middle",
                opacity: 0.7,
              }}
            >
              (aka Ariel Cedillo)
            </span>
          </p>
          <div className="runic-status">
            <code>const path = "Valhalla";</code>
          </div>
        </div>

        <button className="counter" onClick={handleCounterClick}>
          Praises to Odin: {count}
        </button>
      </section>

      <section id="next-steps">
        <div id="forge" className="glass-card">
          <h2>The Forge</h2>
          <p>Robust systems forged with steel and code.</p>

          <div className="forge-category">
            <h3>Artifacts</h3>
            <div className="social-grid">
              {artifacts.map((name, index) => (
                <a
                  key={index}
                  href="#"
                  className={`social-link artifact ${
                    activeArtifact === index ? "struck" : ""
                  }`}
                  onMouseEnter={() => strikeForge(index)}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div className="forge-category">
            <h3>Ancient Runes</h3>
            <div className="social-grid">
              <span className="tech-pill">React</span>
              <span className="tech-pill">Node.js</span>
              <span className="tech-pill">TypeScript</span>
              <span className="tech-pill">UDP/WebSockets</span>
            </div>
          </div>
        </div>

        <div id="social" className="glass-card">
          <h2>Great Halls</h2>
          <p>Find me where the mead and logic flow.</p>
          <div className="social-grid">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
