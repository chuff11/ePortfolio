import React from "react"
import Thumbnails from "./MiniThumbnails.js"
import Enkryption from "../assets/enkryption.jpg"
 
function Pyramid(props) {
  return (
    <div className="project-grid">
      <Thumbnails />
      <div className="page-title">
        <h1>Pyramid Puzzle</h1>
        <div className="MergeGrid1">
        <div className="Intro">
          <em>
            Who wouldn't want a cute little AR app that works off their business card?  It's a brilliant talking point!
          </em>
          <br></br><br></br>
          <div className="emphasize">
            The Pyrimid Puzzle was made for Enkryption, formerly of Provo UT, as a publicity event.  Each side had a puzzle, and when the puzzles were complete the pyrimid opens revealing one number of a code.
            </div>
        </div>
        <div className="EnkryptionImage">
            <img src={Enkryption} alt = "Enkryption Logo" />
        </div>
        <div className="MergeGrid2">
          <div className="Skills">
          <h3>Skills</h3>
            <ul>
              <li>Unity 3D</li>
              <li>C# - touch-based interaction system</li>
              <li>Easy AR SDK</li>
              <li>3d Modeling – Hexagon</li>
              <li>3d Rigging and Animation - Blender</li>
            </ul>
          </div>
          <div className="Demo">
            <h3>Demo</h3>
            <iframe width="350" height="200" src="https://www.youtube.com/embed/66n9hSRe6bU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}
 
export default Pyramid;