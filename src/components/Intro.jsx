import myImage from '../assets/myimage3.jpg';
import "./intro.css"
function Intro(){
    return(
        <div className="intro"  id="intro">
            <div className="left">
                <h1 class="name-title">Hi, I am <span class="highlighted-name">Evelyn Eldo</span></h1>
                <p>I'm a software developer with over two years of hands-on experience in building robust web applications using Java and ReactJS. I’m passionate about creating intuitive, high-performance solutions that solve real-world problems and bring ideas to life through code.</p>
            </div>
            <div className="right">
                <img src={myImage} alt="Evelyn Eldo Image" className="myimage"/>
            </div>

        </div>
    )
}
export default Intro;