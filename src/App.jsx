import Header from "./components/header.jsx"
import Intro from "./components/Intro.jsx"
import Education from "./components/Education.jsx"
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Achievements from "./components/Achievements.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import "./App.css"

function App() {
  return (
    <div>
        <Header/>
        <Intro/>
        <Education/>
        <Experience/>
        <Projects/>
        <Achievements/>
        <Skills/>
        <Contact/>      
    </div>
  );
}

export default App;
