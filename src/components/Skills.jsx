import { useState } from 'react';
import './skills.css';

const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "JavaScript", "SQL"]
  },
  {
    category: "Web Development",
    items: ["ReactJS", "HTML", "CSS", "REST APIs","Node.js (Basics)"]
  },
  {
    category: "Databases",
    items: ["MySQL","PL/SQL"]
  },
  {
    category: "DevOps & Cloud Tools",
    items: ["Azure DevOps", "Azure Pipelines", "Git", "GitHub"]
  },
  {
    category: "Testing & Debugging Tools",
    items: ["Postman", "SoapUI", "UFT", "JUnit"]
  },
  {
    category: "IDEs & Editors",
    items: ["Eclipse", "VS Code", "IntelliJ IDEA", "RTC"]
  },
  {
    category: "Software Development Principles",
    items: ["Agile", "Sprint Planning", "Code Reviews", "Scrum"]
  },
  {
    category: "Productivity Tools",
    items: ["MS Office", "Outlook", "Teams"]
  },
  {
    category: "Soft Skills",
    items: ["Problem-solving", "Collaboration", "Adaptability", "Communication"]
  }
];


function Skills() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="skills-flip-section" id="skills">
      <h2 className="skills-title">Skills</h2>
      {skills.map((skill, index) => (
        <div
          className={`flip-card ${flippedIndex === index ? 'flipped' : ''}`}
          key={index}
          onClick={() => handleFlip(index)}
        >
          <div className="flip-inner">
          <div className="flip-front">
            <span>{skill.category}</span>
            <i className="fa-solid fa-rotate flip-icon" title="Click to Flip"></i>
          </div>

            <div className="flip-back">
              <ul>
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
