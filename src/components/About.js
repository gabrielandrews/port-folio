import pic from "../assets/images/avatar.jpeg";

function About() {
    return (
        <div className="container-about">
            <h1 className="about-header">About Me</h1>
                <div className="about">
                    <img 
                        alt="Error Profile" 
                        src={pic} className="picture"
                    ></img>
            <p className="about-text">Hey! My name is Gabriel Andrews and i am a web developer who has a passion for both front and back end development. 
            I am a graduate of the UNC coding bootcamp with a lot of new skills that im ready to use. I made this portfolio with React. If interested in my 
            skills please feel free to contact me. 
            </p>
        </div>
        </div>
    )
}

export default About;