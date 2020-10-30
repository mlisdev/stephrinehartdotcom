import React, { Component } from "react"; 
import './Skills.css'

class Skills extends Component { 
    render() { 
        return ( 
            <>

                <h2>Skills</h2>
                <div className="Main">
                <div className="skillicons">
                <ul>
               <li> <i className="devicon-html5-plain colored"></i> HTML </li>
               <li> <i class="devicon-css3-plain colored"></i> CSS </li>
               <li> <i class="devicon-bootstrap-plain colored"></i> Bootstrap </li>
               <li> <i className="devicon-javascript-plain colored"></i> Javascript </li>
               <li> <i class="devicon-mongodb-plain colored"></i> MongoDB </li>
               <li> <i class="devicon-nodejs-plain colored"></i> NodeJS </li>
               <li> <i class="devicon-django-plain colored"></i> Django </li>
                    <li> <i class="devicon-python-plain colored"></i> Python </li>
                    <li> <i class="devicon-trello-plain colored"></i> Trello </li>
                    <li><i class="devicon-visualstudio-plain colored"></i> VS Code </li>
                    
                    </ul>
                    </div>
                    </div>
                </>
        )
    }
}

export default Skills; 