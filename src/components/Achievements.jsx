import "./achievements.css";

function Achievements() {
  const items = [
    "Awarded the Chancellor’s Letter of Commendation for outstanding academic performance.",
    "Recognized with the “On the Team Spot Award” at Tata Consultancy Services Limited in 2021.",
    "Received team appreciation for exceptional contributions at Tata Consultancy Services Limited in 2023.",
    "Actively engaged as a member of various college clubs.",
    "Participated in and volunteered for multiple inter-college and intra-college events.",
    "Been part of the Alumni Accreditation Team Member at Flinders University."
  ];

  return (
    <section className="achievements-section" id="achievements">   
      <div className="torn-container">
       <h2 className="achievements-title">Achievements</h2>
        <div className="timeline-container">
          {items.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
