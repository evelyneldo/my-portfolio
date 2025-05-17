import myImage from '../assets/myimage3.jpg';
import "./intro.css";

function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <h1 className="name-title">
          <span className="intro-greeting">Hi, I am </span>
          <span className="highlighted-name">Evelyn Eldo</span>
        </h1>
        <p className="intro-description">
          Motivated software developer with 2 years of professional experience in Java and ReactJS.
          Skilled in building robust web applications with a strong foundation in software development,
          DevOps, and SQL, and a growing interest in machine learning. I thrive in collaborative environments
          and am passionate about delivering impactful, high-quality solutions that solve real-world problems.
          Let’s turn ideas into innovation - together.
        </p>
      </div>
      <div className="right">
        <img src={myImage} alt="Evelyn Eldo" className="myimage" />
      </div>
    </div>
  );
}

export default Intro;
