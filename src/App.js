import React from 'react';
import { 
  Route, 
  BrowserRouter, 
  NavLink
} from "react-router-dom"
import './App.css';
import About from './components/About/About'; 
import Hero from './components/Hero/Hero'; 
import Skills from './components/Skills/Skills'; 
import Portfolio from './components/Portfolio/Portfolio'; 

function App() {
  return (
  
    <>
      <div className="social-nav">
        <a href="https://linkedin.com/in/srinehart" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a> &nbsp;  &nbsp;  &nbsp;  &nbsp; 
         <a href="https://github.com/mlisdev" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a> &nbsp;  &nbsp;  &nbsp;  &nbsp; 
        <a href="https://instagram.com/heyrinehart" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x"></i></a> &nbsp;  &nbsp;  &nbsp;  &nbsp; 
        <a href="http://blog.stephrinehart.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-wordpress fa-2x"></i></a>
                
      </div>
      <BrowserRouter>
  <div>
        <Route exact path="/" component={Hero} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/portfolio" component={Portfolio} />
  </div>
      <footer class="Footer">
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/about" >About</NavLink>
          <NavLink to="/skills" >Skills</NavLink>
          <NavLink to="/portfolio" >Portfolio</NavLink>
          <a href="RinehartResume2020.pdf" download>Download Resume</a>
      </footer>
         </BrowserRouter>
    </>
    
  );
}

export default App;
