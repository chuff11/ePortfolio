import React from 'react'; // Import the Component component from React
import '../App.css';


function Thumbnail_url(props) {
    return (
      <div className="project">
        <a href={props.link}>
          <div className="project-image">
            <img src={props.image} alt="Project Image"/>
          </div>
          <div className="project-title">{props.title}</div>
          <div className="project-category">{props.category}</div>
        </a>
      </div>
    );
  }
  
  export default Thumbnail_url;