import React from "react";
import Thumbnail from './Thumbnail.js';
import Thumbnail_url from './Thumbnail_url.js';
import '../App.css';
import cube from '../assets/CubeThumbnail.png'
import pyramid from '../assets/Pyramid_Thumbnail.png'
import ninja from '../assets/burger_Thumbnail.jpeg'
import zen from '../assets/Zen_Thumbnail.png'



function Thumbnails(props) {
  return (
    <div className="page-title">
          <div className="project-container">
          <Thumbnail
          link="/ePortfolio/MergeCube"
          image= {cube}
          title="Merge Cube Puzzle"
          category="Mobile App"
          desc="Enkryption, Provo UT"
          />
          
          <Thumbnail
          link="/ePortfolio/Pyramid"
          image={pyramid}
          title="Pyramid Puzzle"
          category="Mobile App"
          desc="Enkryption, Provo UT"
          />
          
          <Thumbnail_url
          link="https://htmlpreview.github.io/?https://github.com/chuff11/NinjaBurgerWebsite/blob/master/index.html"
          image={ninja}
          title="Ninja Burger"
          category="Website"
          desc="Javascript validation"
          />
  
          <Thumbnail_url
          link="https://htmlpreview.github.io/?https://github.com/chuff11/ZenDoodleWebsite/blob/master/index.html"
          image={zen}
          title="Zen Doodle"
          category="Website"
          desc="Responsive design"
          />
          </div>
    </div>
  )
}

export default Thumbnails;
