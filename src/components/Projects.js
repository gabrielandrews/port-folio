import React, { useState } from 'react';



const Projects = ({ sites }) => {
    const [pics] = useState([
        {
            name: "",
            github: "https://github.com/gabrielandrews/Guess-That-Movie-Release-Year",
            deployed: "https://gabrielandrews.github.io/Guess-That-Movie-Release-Year/",
        },
       
        {
            name: "",
            github: "https://github.com/erinnaschneider/stargazr",
            deployed: "https://sleepy-beyond-47602.herokuapp.com/",
        },
        {
            name: "",
            github: "https://github.com/ekball/poke-buff",
            deployed: "https://fierce-mesa-57913.herokuapp.com/",
        },
        {
            name: "",
            github: "https://github.com/gabrielandrews/ranodm-passowrd",
            deployed: "https://gabrielandrews.github.io/ranodm-passowrd/",
        },
        
        {
            name:"" ,
            github:"https://github.com/gabrielandrews/budeget-tracker" ,
            deployed:"https://thawing-crag-53137.herokuapp.com/"
        }
    ])

    const recentSites = pics.filter(pic => pic.sites === sites);
        return(
            <div className="project-container">
                <h1 className="project-header">My Projects</h1>
            {recentSites.map((image, i) => (
                <div key={image.name} className ="project-div">
                    <h2 className="pic-name">{image.name}</h2>
                    <a href={image.deployed} target="_blank" rel='noreferrer' className="ahref">
                    <img
                    src={require(`../assets/images/${i+1}.png`)}
                    alt={image.name}
                    key={image.name}
                    className="work-image"
                 />
                 </a>
                
                </div>
            ))}
            </div>
        )
    }

export default Projects