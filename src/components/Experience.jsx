import "./experience.css";

function Experience() {
  return (
    
    <section className="experience-section" id="experience">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-grid">
       <div className="experience-box">
          <h3>Software Developer</h3>
          <p className="company">Tata Consultancy Services Limited, India</p>
          <p className="duration">Jan 2021 – Jan 2023</p>
          <ul>
            <li>Designed and implemented web interfaces using ReactJS, enhancing user experience.</li>
            <li>Developed and tested web services with Java and PL/SQL, using tools like SoapUI and Postman.</li>
            <li>Adapted quickly to diverse technologies, including Microsoft Azure Cloud and Rational Team Concert (RTC).</li>
            <li>Actively participated in Agile workflows, including sprint planning and daily stand-ups.</li>
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
