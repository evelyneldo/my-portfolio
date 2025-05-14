import "./education.css";
import graduateIcon from "../assets/graduate-logo.jpg";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-wrapper">
        {/* Icon on the left side */}
        <div className="education-icon-wrapper">
          <img src={graduateIcon} alt="Graduate Icon" />
        </div>

        {/* Education cards on the right */}
        <div className="education-container">
          <h2 className="education-title">Education</h2>
          <div className="education-entry">
            <h3>Master of Information Technology</h3>
            <p className="university">Flinders University, South Australia</p>
            <p className="date">Feb 2023 – Nov 2024</p>
            <p className="gpa">GPA: 6.37</p>
          </div>

          <div className="education-entry">
            <h3>Bachelor of Technology in Computer Science and Engineering</h3>
            <p className="university">
              APJ Abdul Kalam Technological University, India
            </p>
            <p className="date">Aug 2016 – Sep 2020</p>
            <p className="gpa">GPA: 8.6</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
