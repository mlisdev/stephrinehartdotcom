import React, { Component } from "react"; 
import './About.css'

class About extends Component { 
    render() { 
        return ( 
            <>
                <h2>About</h2>
                <div className="Main">
                <div className="about-column">
                <center>
                    <p className="about-title">Tell me about yourself</p>
                    <p className="brand">
                        I am a solutions-oriented software engineer, dedicated to problem solving and clean
                           design.
                        </p>
                </center>
                     <br />
                      I am "a victim of a series of accidents, as are we all.” <br />
                    - Vonnegut. 
                     <br />
                     <br />
                     After working with community colleges for years, I decided I wanted to get my
                     Master's Degree and explore a second career. I earned my MLIS in 2018 and it's the
                     single thing I'm most proud of in this world.
                     <br />
                     <br />
                     I have worked in jobs focused on partnership management, relationship building, and
                     customer success.
                     <br />
                     <br />
                     I believe front end web design should be ADA accessible, crisp, and clear.<br />
                     Back end web development should be secure, easy to navigate, and designed to improve
                     the user experience.
                    </div>
                    </div>
                </>
        )
    }
}

export default About; 