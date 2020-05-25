import React from "react";
import Thumbnail from './Thumbnail.js';
import './App.css';
import cube from './assets/cube_thumbnail.png'
import pyramid from './assets/pyramid_thumbnail.png'
import ninja from './assets/ninja_thumbnail.png'


function Projects(props) {
  return (
    <div className="page-title">
      <h1>Projects</h1>
        <div className="project-container">
        <Thumbnail
        link="/twitter"
        image= {cube}
        title="Merge Cube Puzzle"
        category="Mobile App"
        />
        
        <Thumbnail
        link="/airbnb"
        image={pyramid}
        title="Pyramid Puzzle"
        category="Mobile App"
        />
        
        <Thumbnail
        link="/photoshop"
        image={ninja}
        title="Ninja Burger"
        category="Website"
        />
        </div>
    </div>
  )
}

export default Projects;