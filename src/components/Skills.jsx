import { useState } from 'react';
import './skills.css';

const skills = [
  { category: "Programming Languages", items: ["Java", "Python"] },
  { category: "Web Development", items: ["ReactJS", "HTML", "CSS", "JavaScript"] },
  { category: "Databases", items: ["MySQL", "PL/SQL"] },
  { category: "DevOps & Tools", items: ["Azure DevOps", "Azure Pipelines", "Git"] },
  { category: "Testing Tools", items: ["UFT", "Postman"] },
  { category: "IDEs", items: ["Eclipse", "VS Code", "IntelliJ", "RTC"] },
  { category: "Productivity Tools", items: ["MS Office", "Outlook"] },
  { category: "Soft Skills", items: ["Problem-solving", "Collaboration", "Adaptability"] },
  { category: "Software Development Principles", items: ["Agile", "Sprint Planning", "Code Reviews"] },
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
              {skill.category}
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
