import "./contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <h2>Get In Touch</h2>

      <div className="contact-item">
        <FaGithub className="icon github" />
        <a href="https://github.com/evelyneldo" target="_blank" rel="noopener noreferrer">
          github.com/evelyneldo
        </a>
      </div>


        <div className="contact-item">
          <FaEnvelope className="icon email" />
          <a href="mailto:evelyneldo98@gmail.com">evelyneldo98@gmail.com</a>
        </div>


        <div className="contact-item">
          <FaPhoneAlt className="icon phone" />
          <span>0466981766</span>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="icon address" />
          <span>Adelaide, South Australia</span>
        </div>

        <div className="contact-item">
          <FaLinkedin className="icon linkedin" />
          <a href="https://www.linkedin.com/in/evelyn-eldo-33188216a/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/evelyn-eldo-33188216a/
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
