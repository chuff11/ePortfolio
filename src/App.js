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
import bg from './assets/bg.svg'

function App() {
  return (
    <BrowserRouter>
    <div className="background">
      <img src={bg} alt="" id="bg" />
      <div className="App">
      
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">
                                          
            <Link to="/ePortfolio/" className="item">Projects</Link>
            <Link to="/ePortfolio/resume" className="item">Résumé</Link>
            <Link to="/ePortfolio/about" className="item">About</Link>

          </div>
        </div>

        <Route exact path="/ePortfolio/" component={Projects} />
        <Route path="/ePortfolio/MergeCube" component={MergeCube} />
        <Route path="/ePortfolio/Pyramid" component={Pyramid} />
        <Route path="/ePortfolio/resume" component={Resume} />
        <Route path="/ePortfolio/about" component={About} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
