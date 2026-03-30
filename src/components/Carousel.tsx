import { useState, useEffect } from "react";
import icpImg from "../assets/icp.jpg";
import gadImg from "../assets/gad.jpg";
import gmovImg from "../assets/gmov.jpg";
import fablabImg from "../assets/fablab.jpg";
import inkBetweenImg from "../assets/inkbetween.jpg";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      name: "ICP",
      description: "Coffee production traceability system.",
      link: "https://cafexporto.com/",
      image: icpImg,
    },
    {
      name: "GAD Cuenca",
      description: "Web systems development and maintenance.",
      link: "https://www.cuenca.gob.ec/",
      image: gadImg,
    },
    {
      name: "GMOV",
      description: "Operational management systems.",
      link: "https://www.gmovep.gob.ec/",
      image: gmovImg,
    },
    {
      name: "FabLab",
      description: "Services platform and network management.",
      link: "https://www.ucacue.edu.ec/fablab/",
      image: fablabImg,
    },
    {
      name: "InkBetween",
      description: "Personal application to track books I read.",
      link: "https://ink-between.vercel.app/",
      image: inkBetweenImg,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="carousel-section">
      <h2>Projects</h2>
      <div className="carousel-wrapper">
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={handlePrev}>
            &#8249;
          </button>
          <div className="carousel-track">
            {projects.map((project, index) => {
              let offset = index - activeIndex;
              const halfLength = Math.floor(projects.length / 2);

              if (offset < -halfLength) offset += projects.length;
              if (offset > halfLength) offset -= projects.length;

              let className = "carousel-card";
              if (offset === 0) className += " active";
              else if (offset === 1) className += " next";
              else if (offset === -1) className += " prev";
              else if (offset > 1) className += " next-hidden";
              else if (offset < -1) className += " prev-hidden";

              return (
                <a
                  key={index}
                  href={project.link}
                  className={className}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="carousel-image"
                  />
                  <div className="carousel-info">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
          <button className="carousel-btn" onClick={handleNext}>
            &#8250;
          </button>
        </div>
        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
