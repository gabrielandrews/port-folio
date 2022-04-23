import hubpic from "../assets/images/hub.png" ;
import linkpic from "../assets/images/link.png";
import stackpic from "../assets/images/stack.png";

function Footer()  {
    return(
        <div className="footer-container">
        <h1 className="footer">[Made With React]</h1>
        <a href="https://github.com/gabrielandrews" target="_blank" rel='noreferrer'>
        <img 
            src= {hubpic}
            alt="github"
            className="logo"/>
        </a>

        <a href="https://www.linkedin.com/in/gabriel-andrews-7531a0235/" target="_blank" rel='noreferrer'>
        <img 
            src= {linkpic}
            alt="linkedin"
            className="logo"/>
        </a>

        <a href="https://stackoverflow.com/users/17010551/gabriel-andrews" target="_blank" rel='noreferrer'>
        <img 
            src= {stackpic}
            alt="stackoverflow"
            className="logo"/>
        </a>

        </div>
    )
}

export default Footer