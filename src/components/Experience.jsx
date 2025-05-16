import "./experience.css";

function Experience() {
  return (
    
    <section className="experience-section" id="experience">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-grid">
        <div className="experience-box">
          <h3>Software Developer</h3>
          <p className="company">Tata Consultancy Services</p>
          <p className="duration">Jan 2021 – Jan 2023</p>
          <ul>
            <li>Built web apps using ReactJS</li>
            <li>Integrated Spring Boot & PL/SQL APIs</li>
            <li>Worked with Azure Cloud & Agile tools</li>
          </ul>
        </div>
        <div className="experience-box">
          <h3>Assistant Teaching Staff</h3>
          <p className="company">Code Camp, South Australia</p>
          <p className="duration">Aug 2023 – Aug 2024</p>
          <ul>
            <li>Taught coding to children</li>
            <li>Promoted creativity and logic</li>
            <li>Led engaging classroom activities</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
