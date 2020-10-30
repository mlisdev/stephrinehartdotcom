import React, { Component } from "react"; 
import './Portfolio.css'

class Portfolio extends Component { 
    render() { 
        return ( 
            <>
                <h2>Portfolio</h2>
                <div className="Main">
                <div className="grid2x2">
           <div className="card">
                <img src="weary-traveler.png" alt="screenshot"></img>
                    <div className="container">
                        <div>
                            <h4>Weary Traveler Flight Tracker</h4>
                                <p>This 3 part lab was assigned during my General Assembly software immersion. This lab is commonly referred to as the "mongoose flights lab." <br />
                                    This lab was assigned in 3 parts, each building on one another. It includes full CRUD of different models. 
                                         <br /> 
                                    <h3>Technologies</h3>
                                    <ul>
                                        <li>Mongoose</li>
                                        <li>Express</li>
                                        <li>NodeJS</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Javascript</li>                        
                                    </ul>
                            </p>
                            <p className="portfoliosub">

                                    <a href="https://github.com/mlisdev/mongoose-flights-weary-traveler"
                                        target="_blank" rel="noopener noreferrer">
                                        <i class="fab fa-github fa-2x"></i></a>

                                    <a href="https://weary-traveler.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i
                                            class="fas fa-external-link-square-alt fa-2x"></i></a>
</p>
                        </div>
                        </div>
                </div>
            
                <div className="card">
                <img src="yourebooked.png" alt="screenshot"></img>
                    <div className="container">
                        <div>
                    <h4>You're Booked! Reading Tracker</h4>
                            <p>This is what I call my "MEN-Stack project. People are familiar with the term MERN
                                Stack, but there's no React here. This project was built using MongoDB/Mongoose,
                                    Express, and NodeJS.<br />
                                 <h3>Technologies</h3>
                                    <ul>
                                        <li>Google OAuth</li>
                                        <li>Mongoose</li>
                                        <li>Express</li>
                                        <li>NodeJS</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Bulma CSS Framework</li>
                                        <li>Javascript</li>                        
                                    </ul>
                            </p>
                            <p className="portfoliosub">
                             <a href="https://github.com/mlisdev/youre-booked-db"
                                        target="_blank" rel="noopener noreferrer">
                                        <i class="fab fa-github fa-2x"></i></a>

                             <a href="https://youre-booked.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i
                                            class="fas fa-external-link-square-alt fa-2x"></i></a>
                    </p>
                </div>
                    </div>
                    </div>
           <div className="card">
                <img src="freetime-fixer.png" alt="screenshot"></img>
                    <div className="container">
                        <div>
                    <h4>Free Time Fixer - Group Project</h4>
                            <p>My role on this project was as the SCRUM master and front end designer. I again used <a href="http://bulma.io" rel="noopener noreferrer" target="_blank">Bulma</a>, which is quickly becoming my favorite CSS framework. The design is simple on purpose, so as not to distract the user in any way. We wanted the web app to be minimal, efficient, and effective.
                            </p><br />
                            <h3>Technologies</h3>
                                    <ul>
                                        <li>Django</li>
                                        <li>Python</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Bulma CSS Framework</li>                        
                                        <li>PyPA</li>                        
                                    </ul>
                            <p className="portfoliosub">"
                             <a href="https://github.com/mlisdev/free-time-fixer"
                                        target="_blank" rel="noopener noreferrer">
                                        <i class="fab fa-github fa-2x"></i></a>

                             <a href="https://freetime-fixer.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i
                                            class="fas fa-external-link-square-alt fa-2x"></i></a>
                    </p>
                </div>
                    </div>
                    </div>
 <div className="card">
                <img src="thesublimest.png" alt="screenshot"></img>
                    <div className="container">
                        <div>
                    <h4>The Sublimest Hike Finder</h4>
                                <p>A full MERN-stack app! This was my "capstone" project in my software engineering bootcamp.<br />
                                    It's a web app to help users find a hike near a specific zipcode. To make this projet, I utilized The Hiking Project API. The search function queries the Google Maps API to find the latitude and longitude of a zipcode to feed into the API, which only uses latitide and longitude. 
                            </p><br />
                            <h3>Technologies</h3>
                                    <ul>
                                        <li>Mongoose</li>
                                        <li>MongoDB Atlas</li>
                                        <li>Express</li>
                                        <li>ReactJS</li>
                                        <li>React Bootstrap UI</li>                        
                                    <li>HTML</li>   
                                    <li>CSS</li>
                                    </ul>
                            <p className="portfoliosub">
                             <a href="https://github.com/mlisdev/the-sublimest"
                                        target="_blank" rel="noopener noreferrer">
                                        <i class="fab fa-github fa-2x"></i></a>

                             <a href="http://thesublimest.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i
                                            class="fas fa-external-link-square-alt fa-2x"></i></a>
                    </p>
                </div>
                    </div>
                    </div>
                    </div>
                    </div>

</>
                
        )
    }
}

export default Portfolio; 