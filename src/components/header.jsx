import "./header.css"
function Header(){
    return(
        <header className="header">
            <nav>
                <a href="#intro">About</a>
                <a href="#education">Education</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#achievements">Achievements</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}
export default Header;