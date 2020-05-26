import React from "react"
import Thumbnails from "./MiniThumbnails.js"
import Enkryption from "../assets/enkryption.jpg"
 
function MergeCube(props) {
  return (
    <div className="project-grid">
      <Thumbnails />
      <div className="page-title">
        <h1>Merge Cube Puzzle</h1>
        <div className="flex-project">
        
        <div className="project-left">
          <h3>What is a Merge Cube?</h3>
          A Merge Cube is a toy.  It is a soft foam cube about 3 inches across with techy-looking patterns made to act as an AR anchor.
  
          <h3>What is it for?</h3>
          Mostly to gaze at through your phone and play the games that attach themselves to its surface.
        </div> 
        <iframe width="265" height="400" src="https://www.youtube.com/embed/Itq6WPSTivE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="project-left">In Provo Utah was a small escape room place.  
        One of the rooms with an evil scientist theme needed a bit of a digital 
        flare.  I was hired to add </div>
        <img src={Enkryption} />
        
        </div>
      </div>
    </div>
  )
}
 
export default MergeCube;