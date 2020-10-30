import React, { Component } from "react"; 
import './Hero.css'; 

class Hero extends Component { 
    render() { 
        return ( 
            <>
                <div className="Main">
                    <div className="row">
                        <div className="column">
                 <p className="intro">
                    hei!
                                </p>
                            <p className="name">
                                my name's stephanie.<br />
                                i'm a <mark>librarian</mark>, <br />
                                & <mark>software developer</mark>
                                <br />
                                based in <mark>new england</mark>
                            </p>
                            <center>
        <a href="mailto:hello@stephrinehart.com"><i class="fas fa-envelope fa-2x"></i></a>&nbsp;  &nbsp;  &nbsp;  &nbsp; 
                                    <a href="tel:+‪304-278-4470‬"><i class="fas fa-phone-square-alt fa-2x"></i></a> 
                            </center>
                        </div>
                    </div>
                    <div className="column">
                        <div id="photo">
                            <img src="steph.jpg" alt="stephanie wearing a rainbow sweater"></img>
                    </div>
                    </div>
                    </div>
                </>
        )
    }
}

export default Hero; 