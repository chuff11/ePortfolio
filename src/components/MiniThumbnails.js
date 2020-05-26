import React from "react";
import Thumbnail from './Thumbnail.js';
import '../App.css';
import cube from '../assets/CubeThumbnail.png'
import pyramid from '../assets/Pyramid_Thumbnail.png'
import ninja from '../assets/burger_Thumbnail.jpeg'
import zen from '../assets/Zen_Thumbnail.png'



function MiniThumbnails(props) {
  return (
    <div className="mini">
          <div className="project-container">
          <Thumbnail
          link="/MergeCube"
          image= {cube}
          title="Merge Cube Puzzle"
          category="Mobile App"
          />
          
          <Thumbnail
          link="/Pyramid"
          image={pyramid}
          title="Pyramid Puzzle"
          category="Mobile App"
          />
          
          <Thumbnail
          link="/assets/NinjaBurger/index.html"
          image={ninja}
          title="Ninja Burger"
          category="Website"
          />
  
          <Thumbnail
          link="/photoshop"
          image={zen}
          title="Zen Doodle"
          category="Website"
          />
          </div>
    </div>
  )
}

export default MiniThumbnails;