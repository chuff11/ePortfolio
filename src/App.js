import React from 'react';
import logo from './assets/name.svg';
//import BrowserRouter, Route and Link
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Resume from './Resume.js'; 
import About from './About.js';
import './App.css';
import MergeCube from './components/MergeCube.js';
import Pyramid from './components/Pyramid.js';
//import Ninja from './assets/NinjaBurger/index.html';

function App() {
  return (
    <BrowserRouter>
    <div className="background">
      <div className="App">
      
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">
                                          
            <Link to="/" className="item">Projects</Link>
            <Link to="/resume" className="item">Résumé</Link>
            <Link to="/about" className="item">About</Link>

          </div>
        </div>

        <Route exact path="/" component={Projects} />
        <Route path="/MergeCube" component={MergeCube} />
        <Route path="/Pyramid" component={Pyramid} />
        <Route path="/resume" component={Resume} />
        <Route path="/about" component={About} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
