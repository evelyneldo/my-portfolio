import './projects.css';

const projects = [
  {
    title: "Quote Recommendation App",
    description: "React + Node.js app that suggests quotes based on user mood. Uses emotion detection and RESTful APIs.",
    link: "https://github.com/evelyneldo/feeling-quotes-app"
  },
  {
    title: "Weather Outfit Recommendation App",
    description: "A React-based app that recommends clothing based on current and forecasted weather using OpenWeatherMap API.",
    link: "https://github.com/evelyneldo/weather-outfit-app"
  },
  {
    title: "DevOps Project: Chemical Management System",
    description: "Developed in 2024, this system enables secure chemical inventory management with continuous integration and deployment pipelines."
  },
  {
    title: "Deep Learning: Malayalam Font Detection",
    description: "Built a model in 2020 to detect Malayalam font families from informatory traffic sign boards using CNNs."
  },
  {
    title: "SAP Management on Drupal",
    description: "Created in 2018, this platform helps universities manage Student Activity Points using Drupal and MariaDB."
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            {proj.link && (
              <a
                className="project-link"
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
              >
             Github Link
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
