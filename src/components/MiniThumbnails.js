import React from "react";
import Thumbnail from './Thumbnail.js';
import Thumbnail_url from './Thumbnail_url.js';
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
          
          <Thumbnail_url
          link="https://htmlpreview.github.io/?https://github.com/chuff11/NinjaBurgerWebsite/blob/master/index.html"
          image={ninja}
          title="Ninja Burger"
          category="Website"
          desc="Schoolwork, Javascript validation"
          />
  
          <Thumbnail_url
          link="https://htmlpreview.github.io/?https://github.com/chuff11/ZenDoodleWebsite/blob/master/index.html"
          image={zen}
          title="Zen Doodle"
          category="Website"
          desc="Schoolwork, Responsive design"
          />
          </div>
    </div>
  )
}

export default MiniThumbnails;